package com.uga.backend.handler;

import java.util.List;

import org.jetbrains.annotations.NonBlocking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gcp.data.firestore.FirestoreTemplate;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.w3c.dom.Text;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.uga.backend.entity.SearchByIdObject;
import com.uga.backend.entity.SearchByNameObject;
import com.uga.backend.entity.Ticket;
import com.uga.backend.service.TicketService;

import reactor.core.publisher.Mono;

@Component
@NonBlocking
public class TicketHandler {

    @Autowired
    TicketService ticketService;
    
    ObjectMapper mapper  = new ObjectMapper();
    public Mono<ServerResponse> saveTicket(ServerRequest serverRequest) {
        Mono<String> body = serverRequest.bodyToMono(String.class);
        return body.flatMap(json -> {
            try {
                Ticket ticket = mapper.readValue(json, Ticket.class);
                ticketService.saveTicket(ticket);
                return ServerResponse  
                    .ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(BodyInserters.fromValue(ticket));
            } catch (Exception e) {
                System.out.println(e.getMessage());
                return ServerResponse
                    .badRequest()
                    .body(BodyInserters.fromValue("Error parsing data"));
            }
        });
    }

    public Mono<ServerResponse> getTicketByName(ServerRequest serverRequest) {
        Mono<String> body = serverRequest.bodyToMono(String.class);
        return body.flatMap(json -> {
            try {
                SearchByNameObject search = mapper.readValue(json, SearchByNameObject.class);
                Ticket ticket = ticketService.getTicket(search.getName());
                return ServerResponse
                    .ok()   
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(BodyInserters.fromValue(ticket));
            } catch (Exception e) {
                System.out.println(e.getMessage());
                return ServerResponse
                    .badRequest()
                    .body(BodyInserters.fromValue("Error getting textbook"));
            }
        });
    }

    public Mono<ServerResponse> getTicketsAll() {

        try {
            List<Ticket> tickets = ticketService.getTicketsAll();
            return ServerResponse
                    .ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(BodyInserters.fromValue(tickets));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ServerResponse
                    .badRequest()
                    .body(BodyInserters.fromValue("There was an error getting the data"));
        }
    }
}