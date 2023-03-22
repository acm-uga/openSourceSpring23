package com.uga.backend.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchByNameObject {
   
    private String name;

    public SearchByNameObject() {

    }

    @JsonCreator
    public SearchByNameObject(@JsonProperty("name") String name) {
        this.name = name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
