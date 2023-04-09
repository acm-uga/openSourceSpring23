package com.uga.backend.entity;

import org.springframework.cloud.gcp.data.firestore.Document;
import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.cloud.firestore.annotation.DocumentId;

@Document(collectionName = "offer&request")
public class CourseSwap {
    @DocumentId
    Course offered;
    Course requested;

    public CourseSwap() {
        //default constructor for deserialization
    }

    @JsonCreator
    public CourseSwap(@JsonProperty("offered") Course offered, 
                        @JsonProperty("requested") Course requested) {
        super();
        this.offered = offered;
        this.requested = requested;
    }

    public Course getOffered() {
        return offered;
    }

    public void setOffered(Course offered) {
        this.offered = offered;
    }

    public Course getRequested() {
        return requested;
    }

    public void setRequested(Course requested) {
        this.requested = requested;
    }
}
