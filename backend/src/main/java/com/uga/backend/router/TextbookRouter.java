package com.uga.backend.router;
import org.springframework.web.reactive.function.server.RequestPredicates;

import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.uga.backend.handler.TextbookHandler;

@Component
public class TextbookRouter {
    
    @Bean("TextbookRouterBean")
    public RouterFunction<ServerResponse> textbookRouter(TextbookHandler textbookHandler) {

        return RouterFunctions.route()
        .GET("/api/textbooks/getTextbookByName", RequestPredicates.accept(MediaType.APPLICATION_JSON), textbookHandler::getTextbookByName)
        .GET("/api/textbooks/getTextbookById", RequestPredicates.accept(MediaType.APPLICATION_JSON), textbookHandler::getTextbookById)
        .POST("/api/textbooks/save", RequestPredicates.accept(MediaType.APPLICATION_JSON), textbookHandler::saveTextbook)
        .build();
    }
}
