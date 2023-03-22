package com.uga.backend.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SearchByIdObject {
    
    private String id;

    public SearchByIdObject() {

    }

    @JsonCreator
    public SearchByIdObject(@JsonProperty("id") String id) {
        this.id = id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return this.id;
    }
}
