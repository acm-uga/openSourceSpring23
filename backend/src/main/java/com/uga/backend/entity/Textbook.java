package com.uga.backend.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Textbook {

    private String name;

    public Textbook() {
        //default constructor for deserialization
    }

    @JsonCreator
    public Textbook(@JsonProperty("name") String name) {
        super();
        this.name = name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
