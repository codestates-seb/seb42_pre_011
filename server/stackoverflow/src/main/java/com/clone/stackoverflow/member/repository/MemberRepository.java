package com.clone.stackoverflow.member.repository;

import com.clone.stackoverflow.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {

    @Override
    Optional<Member> findById(Long aLong);
}
