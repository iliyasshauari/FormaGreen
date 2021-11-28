package com.projectR.projectR.repo;
import com.projectR.projectR.model.GreenArea;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GreenAreaRepo extends JpaRepository<GreenArea, Long> {

    Optional<GreenAreaRepo> findGreenAreaRepoById(Long id);
}
