package com.clone.stackoverflow.member.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Entity
@Table
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_id;
    @Column(length = 100,nullable = false, unique = true)
    private String name;

    @Column(length = 100,nullable = false,updatable = false, unique = true)
    private String email;

    @Column(length = 100,nullable = false)
    private String password;

    private LocalDateTime createdAt;

    @Builder
    public Member(long user_id, String name, String email, String password, LocalDateTime createdAt) {
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
    }
}
