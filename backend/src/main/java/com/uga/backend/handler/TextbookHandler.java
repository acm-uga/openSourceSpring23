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
import com.uga.backend.entity.Textbook;
import com.uga.backend.repo.TextbookRepository;
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

    public Mono<ServerResponse> getTextbookByName(ServerRequest serverRequest) {
        Mono<String> body = serverRequest.bodyToMono(String.class);
        return body.flatMap(json -> {
            try {
                SearchByNameObject search = mapper.readValue(json, SearchByNameObject.class);
                Textbook textbook = textbookService.getTextbook(search.getName());
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

    public Mono<ServerResponse> getTextbookById(ServerRequest serverRequest) {
        Mono<String> body = serverRequest.bodyToMono(String.class);
        return body.flatMap(json -> {
            try {
                SearchByIdObject search = mapper.readValue(json, SearchByIdObject.class);
                Textbook textbook = textbookService.getTextbook(search.getId());
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

    public Mono<ServerResponse> getTextbooksAll(ServerRequest serverRequest) {
        Mono<String> body = serverRequest.bodyToMono(String.class);
        return body.flatMap(json -> {
            try {
                List<Textbook> textbookList = textbookService.getTextbooksAll();
                return ServerResponse
                    .ok()
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(BodyInserters.fromValue(textbookList));
            } catch (Exception e) {
                System.out.println(e.getMessage());
                return ServerResponse
                    .badRequest()
                    .body(BodyInserters.fromValue("Error getting textbook"));
            }
        });
    }
}