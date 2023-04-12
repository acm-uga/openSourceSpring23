package com.uga.backend.entity;

import org.springframework.cloud.gcp.data.firestore.Document;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.cloud.firestore.annotation.DocumentId;

@Document(collectionName = "tickets")
public class Ticket {
    
    @DocumentId
    public String name;
    public String location;
    public String team;
    public double price;
    public String seller;

    public Ticket() {

    }
    
    public Ticket(@JsonProperty("name") String name,
                  @JsonProperty("location") String location,
                  @JsonProperty("team") String team,
                  @JsonProperty("price") double price,
                  @JsonProperty("seller") String seller) {
                    
                    this.name = name;
                    this.location = location;
                    this.team = team;
                    this.price = price;
                    this.seller = seller;
                  }
    
    public void setName(String name) {
        this.name = name;
    }

    public void setLocation(String location) {
        this.location = location;
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

    public String getName() {
        return this.name;
    }

    public String getLocation() {
        return this.location;
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
}   
