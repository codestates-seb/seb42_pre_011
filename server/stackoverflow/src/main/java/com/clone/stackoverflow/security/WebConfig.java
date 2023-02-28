package com.clone.stackoverflow.security;

import com.clone.stackoverflow.member.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
public class WebConfig {
    private Environment environment;
    private MemberService memberService;
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    public WebConfig(Environment environment, MemberService memberService, JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.environment = environment;
        this.memberService = memberService;
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    private AuthenticationManager authenticationManager;

    @Bean
    public AuthenticationManager getAuthenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        try {
            AuthenticationManagerBuilder authenticationManagerBuilder = httpSecurity.getSharedObject(AuthenticationManagerBuilder.class);
            authenticationManagerBuilder.userDetailsService(memberService);
            authenticationManager = authenticationManagerBuilder.build();

            httpSecurity
                    .csrf().disable()
                    .authorizeHttpRequests()
                    .antMatchers("/questions/**")
                    .permitAll()
                    .antMatchers(HttpMethod.GET, "/members/**")
                    .permitAll()
                    .antMatchers(HttpMethod.POST, "/members/**")
                    .permitAll()
                    .antMatchers(HttpMethod.GET, "/questions")
                    .permitAll()
                    .antMatchers("/login")
                    .permitAll()
//                    .antMatchers("/answers/**")
//                    .permitAll()
//                    .antMatchers( "/votes/**")
//                    .permitAll()
//                    .antMatchers( "/votes")
//                    .permitAll()
//                    .antMatchers( "/members")
//                    .permitAll()
//                    .antMatchers( "/answers")
//                    .permitAll()
//                    .antMatchers("/**")
//                    .authenticated()q
                    .and()
                    .addFilterBefore(
                            jwtAuthenticationFilter,
                            UsernamePasswordAuthenticationFilter.class)
                    .addFilter(getAuthenticationFilter(httpSecurity.getSharedObject(AuthenticationConfiguration.class)));

            httpSecurity
                    .headers().frameOptions().disable();

            httpSecurity
                    .authenticationManager(authenticationManager)
                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return httpSecurity.build();
    }

    private AuthenticationFilter getAuthenticationFilter(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        AuthenticationFilter authenticationFilter = new AuthenticationFilter(getAuthenticationManager(authenticationConfiguration), memberService, environment);
        authenticationFilter.setAuthenticationManager(getAuthenticationManager(authenticationConfiguration));
        return authenticationFilter;
    }
}

