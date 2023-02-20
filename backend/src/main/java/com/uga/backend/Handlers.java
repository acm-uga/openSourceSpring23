package com.uga.backend;

import org.jetbrains.annotations.NonBlocking;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
@NonBlocking
public class Handlers {

  /**
   * Responds with a simple greeting
   *
   * @return "Hello Reactive People!"
   */
  public Mono<ServerResponse> hello() {
    return ServerResponse
        .ok()
        .contentType(MediaType.TEXT_PLAIN)
        .bodyValue("Hello Reactive People!");
  }

  /**
   * Takes the request body and responds with the same body
   *
   * @param req the incoming request
   * @return the request body
   */
  public Mono<ServerResponse> echo(ServerRequest req) {
    Mono<String> rawText = req.bodyToMono(String.class);
    return ServerResponse
        .ok()
        .contentType(MediaType.TEXT_PLAIN)
        .body(rawText, String.class);
  }

  /**
   * Takes the request body, converts it to a stream of characters, filters out every character
   * except for 'a', accumulates all remaining characters into a string, & concatenates "h!" onto
   * the end
   *
   * @param req the incoming request
   * @return "aaaah!"
   */
  public Mono<ServerResponse> yell(ServerRequest req) {
    Mono<String> rawText = req.bodyToMono(String.class);

    Flux<Character> characters = rawText.flatMapMany(Utilities::toCharacters).log();

    Flux<Character> onlyAs = characters.filter(elem -> elem == 'a').log();

    Mono<String> combinedAs = onlyAs.reduce("", (acc, elem) -> acc + elem).log();

    Mono<String> yellingText = combinedAs.flatMap(elem -> Mono.just(elem + "h!")).log();

    return ServerResponse
        .ok()
        .contentType(MediaType.TEXT_PLAIN)
        .body(yellingText, String.class);
  }

  /**
   * Same as the yell() function but significantly easier to read
   *
   * @param req the incoming request
   * @return "aaaah!"
   */
  public Mono<ServerResponse> elegantYell(ServerRequest req) {
    Mono<String> yellingText = req
        .bodyToMono(String.class)
        .flatMapMany(Utilities::toCharacters)
        .filter(elem -> elem == 'a')
        .reduce("", (acc, elem) -> acc + elem)
        .flatMap(elem -> Mono.just(elem + "h!"));

    return ServerResponse
        .ok()
        .contentType(MediaType.TEXT_PLAIN)
        .body(yellingText, String.class);
  }

  // @TODO add json example
}
