package com.uga.backend.router;
import org.springframework.web.reactive.function.server.RequestPredicates;

import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.uga.backend.handler.TicketHandler;

@Component
public class TicketRouter {
    
    @Bean("TicketRouterBean")
    public RouterFunction<ServerResponse> textbookRouter(TicketHandler ticketHandler) {

        return RouterFunctions.route()
        .GET("/api/tickets/getTicketsByName", RequestPredicates.accept(MediaType.APPLICATION_JSON), ticketHandler::getTicketByName)
        .GET("/api/tickets/getTicketsAll", req -> ticketHandler.getTicketsAll())
        .POST("/api/tickets/save", RequestPredicates.accept(MediaType.APPLICATION_JSON), ticketHandler::saveTicket)
        .build();
    }
}
