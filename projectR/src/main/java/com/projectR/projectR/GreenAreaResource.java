package com.projectR.projectR;

import com.projectR.projectR.model.GreenArea;
import com.projectR.projectR.repo.GreenAreaRepo;
import com.projectR.projectR.service.GreenAreaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/greenArea")
public class GreenAreaResource {
    private final GreenAreaService greenAreaService;

    public GreenAreaResource(GreenAreaService greenAreaService) {
        this.greenAreaService= greenAreaService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<GreenArea>> getAllGreenAreas () {
        List<GreenArea> greenAreas = greenAreaService.findAllGreenArea();
        return new ResponseEntity<>(greenAreas, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<GreenArea> getGreenAreaById (@PathVariable("id") Long id) {
        GreenArea greenArea = greenAreaService.findGreenAreaById(id);
        return new ResponseEntity<>(greenArea, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<GreenArea> addGreenArea(@RequestBody GreenArea greenArea)  {
        GreenArea newGreanArea = greenAreaService.addGreenArea(greenArea);
        return new ResponseEntity<>(newGreanArea, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<GreenArea> updateGreanArea(@RequestBody GreenArea greenArea) {
        GreenArea updatedGreenArea = greenAreaService.updateGreenArea(greenArea);
        return new ResponseEntity<>(updatedGreenArea, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteGreenArea(@PathVariable("id") Long id) {
        greenAreaService.deleteGreenArea(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }





}
