package com.projectR.projectR.service;
import com.projectR.projectR.exception.UserNotFoundException;
import com.projectR.projectR.model.GreenArea;
import com.projectR.projectR.repo.GreenAreaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.List;
import java.util.UUID;


@Service
@Transactional
public class GreenAreaService {
    private final GreenAreaRepo greenAreaRepo;

    @Autowired
    public GreenAreaService(GreenAreaRepo greenAreaRepo) {

        this.greenAreaRepo = greenAreaRepo;
    }

    public GreenArea addGreenArea(GreenArea greenArea) {
        greenArea.setAreaCode(UUID.randomUUID().toString());
        return greenAreaRepo.save(greenArea);
    }


    public List<GreenArea> findAllGreenArea() {

        return greenAreaRepo.findAll();
    }

    public GreenArea updateGreenArea(GreenArea greenArea) {

       return greenAreaRepo.save(greenArea);
    }

    public void deleteGreenArea(Long id) {

        greenAreaRepo.deleteById(id);
    }

    public GreenArea findGreenAreaById(Long id) {
        return (GreenArea) greenAreaRepo.findGreenAreaRepoById(id).orElseThrow(() -> new UserNotFoundException("User by ID" + id + "was not found!"));
    }
}


