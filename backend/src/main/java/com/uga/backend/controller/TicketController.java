package com.uga.backend.controller;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uga.backend.entity.Ticket;
import com.uga.backend.repository.TicketRepository;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    TicketRepository ticketRepository;

    @PostMapping("/save")
    public Mono<Ticket> save(@RequestParam Ticket textbook) {
        return this.ticketRepository.save(textbook);
    }

    @GetMapping("/get")
    public Mono<Ticket> getById(@RequestParam String id) {
        return this.ticketRepository.findById(id);
    }

    @GetMapping("/getAll")
    public Flux<Ticket> getAll() {
        return this.ticketRepository.findAll();
    }

    @DeleteMapping("/delete")
    public Mono<Void> delete(String id) {
        return this.ticketRepository.deleteById(id);
    }

}