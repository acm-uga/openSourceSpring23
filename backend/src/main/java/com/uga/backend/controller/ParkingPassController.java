package com.uga.backend.controller;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uga.backend.entity.ParkingPass;
import com.uga.backend.repository.ParkingPassRepository;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/parking")
public class ParkingPassController {

    @Autowired
    ParkingPassRepository parkingPassRepository;

    @PostMapping("/save")
    public Mono<ParkingPass> save(@RequestBody ParkingPass pass) {
        return this.parkingPassRepository.save(pass);
    }

    @GetMapping("/get")
    public Mono<ParkingPass> getById(@RequestParam String id) {
        return this.parkingPassRepository.findById(id);
    }

    @GetMapping("/getAll")
    public Flux<ParkingPass> getAll() {
        return this.parkingPassRepository.findAll();
    }

    @DeleteMapping("/delete")
    public Mono<Void> delete(String id) {
        return this.parkingPassRepository.deleteById(id);
    }

}