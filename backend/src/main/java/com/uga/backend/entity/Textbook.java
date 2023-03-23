package com.uga.backend.entity;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

enum Condition {
    NEW,
    USED,
    DAMAGED
}

public class Textbook {

    private String name;
    private String author;
    private String course;
    private double price;
    private Condition condition;

    public Textbook() {
        //default constructor for deserialization
    }

    @JsonCreator
    public Textbook(@JsonProperty("name") String name,
                    @JsonProperty("author") String author,
                    @JsonProperty("course") String course,
                    @JsonProperty("price") double price,
                    @JsonProperty("condition") Condition condition) {
        super();
        this.name = name;
        this.author = author;
        this.course = course;
        this.price = price;
        this.condition = condition;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setCondition(Condition condition) {
        this.condition = condition;
    }

    public String getName() {
        return this.name;
    }

    public String getAuthor() {
        return this.author;
    }

    public String getCourse() {
        return this.course;
    }

    public double getPrice() {
        return this.price;
    }

    public Condition getCondition() {
        return this.condition;
    }
}
