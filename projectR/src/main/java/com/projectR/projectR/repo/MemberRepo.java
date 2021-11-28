package com.projectR.projectR.repo;
import com.projectR.projectR.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface MemberRepo extends JpaRepository<Member,Long> {


    Optional<Member> findMemberById(Long id);
}
