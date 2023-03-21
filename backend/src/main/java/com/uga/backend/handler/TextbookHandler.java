package com.uga.backend.handler;

import org.jetbrains.annotations.NonBlocking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.uga.backend.entity.Textbook;
import com.uga.backend.service.TextbookService;

import reactor.core.publisher.Mono;

@Component
@NonBlocking
public class TextbookHandler {

    @Autowired 
    TextbookService textbookService;
    
    ObjectMapper mapper  = new ObjectMapper();
    public Mono<ServerResponse> saveTextbook(ServerRequest serverRequest) {
        Mono<String> body = serverRequest.bodyToMono(String.class);
        return body.flatMap(json -> {
            try {
                Textbook textbook = mapper.readValue(json, Textbook.class);
                textbookService.saveTextbook(textbook);
                return ServerResponse  
                    .ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(BodyInserters.fromValue(textbook));
            } catch (Exception e) {
                System.out.println(e.getMessage());
                return ServerResponse
                    .badRequest()
                    .body(BodyInserters.fromValue("Error parsing data"));
            }
        });
    }
}