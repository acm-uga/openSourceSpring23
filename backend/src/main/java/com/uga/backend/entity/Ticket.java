package com.uga.backend.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.cloud.spring.data.firestore.Document;

@Document(collectionName = "tickets")
public class Ticket {
    
    @DocumentId
    public String id;
    public String team;
    public double price;
    public String seller;
    public String contactInfo;
    public String additionalDetails;

    public Ticket() {

    }
    
    public Ticket(
                  @JsonProperty("team") String team,
                  @JsonProperty("price") double price,
                  @JsonProperty("seller") String seller,
                  @JsonProperty("contactInfo") String contactInfo,
                  @JsonProperty("additionalDetails") String additionalDetails) {
                    
                    this.team = team;
                    this.price = price;
                    this.seller = seller;
                    this.contactInfo = contactInfo;
                    this.additionalDetails = additionalDetails;
                  }

    public void setTeam(String team) {
        this.team = team;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public void setAdditionalDetails(String additionalDetails) {
        this.additionalDetails = additionalDetails;
    }

    public String getTeam() {
        return this.team;
    }

    public double getPrice() {
        return this.price;
    }

    public String getSeller() {
        return this.seller;
    }

    public String getAdditionalDetails() {
        return this.additionalDetails;
    }
}   
