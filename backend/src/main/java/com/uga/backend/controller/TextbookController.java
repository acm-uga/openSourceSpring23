package com.uga.backend.controller;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uga.backend.entity.Textbook;
import com.uga.backend.repository.TextbookRepository;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/textbooks")
public class TextbookController {

    @Autowired
    TextbookRepository textbookRepository;

    @PostMapping("/save")
    public Mono<Textbook> save(@RequestParam Textbook textbook) {
        return this.textbookRepository.save(textbook);
    }

    @GetMapping("/get")
    public Mono<Textbook> getById(@RequestParam String id) {
        return this.textbookRepository.findById(id);
    }

    @GetMapping("/getAll")
    public Flux<Textbook> getAll() {
        return this.textbookRepository.findAll();
    }

    @DeleteMapping("/delete")
    public Mono<Void> delete(String id) {
        return this.textbookRepository.deleteById(id);
    }

}
