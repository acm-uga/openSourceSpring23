package com.uga.backend.handler;

import java.util.List;

import org.jetbrains.annotations.NonBlocking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.uga.backend.entity.ParkingPass;
import com.uga.backend.entity.SearchByIdObject;
import com.uga.backend.service.ParkingPassService;

import reactor.core.publisher.Mono;

@Component
@NonBlocking
public class ParkingPassHandler {
    @Autowired
    ParkingPassService passService;
    
    ObjectMapper mapper  = new ObjectMapper();
    public Mono<ServerResponse> saveParkingPass(ServerRequest serverRequest) {
        Mono<String> body = serverRequest.bodyToMono(String.class);
        return body.flatMap(json -> {
            try {
                ParkingPass pass = mapper.readValue(json, ParkingPass.class);
                passService.saveParkingPass(pass);
                return ServerResponse  
                    .ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(BodyInserters.fromValue(pass));
            } catch (Exception e) {
                System.out.println(e.getMessage());
                return ServerResponse
                    .badRequest()
                    .body(BodyInserters.fromValue("Error parsing data"));
            }
        });
    }

    public Mono<ServerResponse> getParkingPassById(ServerRequest serverRequest) {
        Mono<String> body = serverRequest.bodyToMono(String.class);
        return body.flatMap(json -> {
            try {
                SearchByIdObject search = mapper.readValue(json, SearchByIdObject.class);
                ParkingPass textbook = passService.getParkingPass(search.getId());
                return ServerResponse
                    .ok()   
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(BodyInserters.fromValue(textbook));
            } catch (Exception e) {
                System.out.println(e.getMessage());
                return ServerResponse
                    .badRequest()
                    .body(BodyInserters.fromValue("Error getting textbook"));
            }
        });
    }

    public Mono<ServerResponse> getParkingPassAll(ServerRequest serverRequest) {
        try {
            List<ParkingPass> parkingPassList = passService.getParkingPassAll();
            return ServerResponse
                    .ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(BodyInserters.fromValue(parkingPassList));
        } catch (Exception e) {
            return ServerResponse
                    .badRequest()
                    .body(BodyInserters.fromValue(e.getMessage()));
        }
    }
}
