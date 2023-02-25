package com.uga.backend;

import static org.springframework.http.MediaType.TEXT_PLAIN;
import static org.springframework.web.reactive.function.server.RequestPredicates.accept;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Component
public class Routers {

  @Bean
  public RouterFunction<ServerResponse> router(Handlers handlers) {

    // be sure to place all routes under "/api/"
    // we want to minimize the chance of namespace collision in url with frontend
    return RouterFunctions.route()
        .GET("/api/hello", req -> handlers.hello())
        .POST("/api/echo", accept(TEXT_PLAIN), handlers::echo)
        .POST("/api/yell", accept(TEXT_PLAIN), handlers::yell)
        .POST("/api/elegantYell", accept(TEXT_PLAIN), handlers::elegantYell)
        .build();
  }
}
