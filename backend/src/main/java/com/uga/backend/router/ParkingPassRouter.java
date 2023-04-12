package com.uga.backend.router;
import org.springframework.web.reactive.function.server.RequestPredicates;

import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.uga.backend.handler.ParkingPassHandler;

@Component
public class ParkingPassRouter {
    
    @Bean("ParkingPassRouterBean")
    public RouterFunction<ServerResponse> parkingPassRouter(ParkingPassHandler passHandler) {

        return RouterFunctions.route()
        .GET("/api/parking/getParkingPassById", RequestPredicates.accept(MediaType.APPLICATION_JSON), passHandler::getParkingPassById)
        .GET("/api/parking/getParkingPassAll", req -> passHandler.getParkingPassAll())
        .POST("/api/parking/save", RequestPredicates.accept(MediaType.APPLICATION_JSON), passHandler::saveParkingPass)
        .build();
    }
}