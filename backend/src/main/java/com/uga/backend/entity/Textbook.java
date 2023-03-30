package com.uga.backend.entity;

import org.springframework.cloud.gcp.data.firestore.Document;
import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.cloud.firestore.annotation.DocumentId;

enum Condition {
    NEW,
    EXCELLENT,
    GOOD,
    USED,
    DAMAGED,
}

@Document(collectionName = "textbooks")
public class Textbook {

    @DocumentId
    private String title;
    private String author;
    private String seller;
    private String course;
    private double price;
    private Condition condition;
    private String imageURL;

    public Textbook() {
        //default constructor for deserialization
    }

    @JsonCreator
    public Textbook(@JsonProperty("title") String title,
                    @JsonProperty("author") String author,
                    @JsonProperty("course") String course,
                    @JsonProperty("price") double price,
                    @JsonProperty("condition") Condition condition,
                    @JsonProperty("seller") String seller,
                    @JsonProperty("imageURL") String imageURL) {
        super();
        this.title = title;
        this.author = author;
        this.course = course;
        this.price = price;
        this.condition = condition;
        this.seller = seller;
        this.imageURL = imageURL;
    }

    public void setName(String name) {
        this.title = name;
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

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public String getName() {
        return this.title;
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

    public String getSeller() {
        return this.seller;
    }

    public String getImageURL() {
        return this.imageURL;
    }
}
