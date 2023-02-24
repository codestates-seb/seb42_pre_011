package com.clone.stackoverflow.security;

import com.clone.stackoverflow.member.dto.MemberLoginDto;
import com.clone.stackoverflow.member.entity.Member;
import com.clone.stackoverflow.member.service.MemberService;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import lombok.Setter;
import org.springframework.core.env.Environment;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.crypto.SecretKey;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

public class AuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private MemberService memberService;
    private Environment environment;

    public AuthenticationFilter(AuthenticationManager authenticationManager, MemberService memberService, Environment environment) {
        super(authenticationManager);
        this.memberService = memberService;
        this.environment = environment;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            MemberLoginDto memberLoginDto = new ObjectMapper().readValue(request.getInputStream(), MemberLoginDto.class); //getinputstream이 받아와서 member로그인디티오에 매핑해준다
            return getAuthenticationManager().authenticate(
                    new UsernamePasswordAuthenticationToken(
                            memberLoginDto.getEmail(),
                            memberLoginDto.getPassword(),
                            new ArrayList<>()
                    )
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        String username = ((User)authResult.getPrincipal()).getUsername();
        Member member = memberService.findByEmail(username);

        SecretKey privateKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(environment.getProperty("token.secret")));
        String token = Jwts.builder()
                .setSubject(member.getEmail())
                .setExpiration(new Date(System.currentTimeMillis() + Long.valueOf(environment.getProperty("token.expiration_time"))))
                .signWith(privateKey, SignatureAlgorithm.HS512)
                .compact();

        @Getter
        @Setter
        class ResponseToken {
            private String token;
        }

        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");

        ResponseToken responseToken = new ResponseToken();
        responseToken.setToken(token);
        response.getWriter().write(new ObjectMapper().writeValueAsString(responseToken));
    }

}
