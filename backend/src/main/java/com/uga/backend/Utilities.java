package com.uga.backend;

import reactor.core.publisher.Flux;

class Utilities {

  protected static Flux<Character> toCharacters(String elem) {
    return Flux.fromStream(elem
        .codePoints()
        .mapToObj(c -> (char) c));
  }
}
