package com.uga.backend.entity;

import org.springframework.cloud.gcp.data.firestore.Document;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.cloud.firestore.annotation.DocumentId;

@Document(collectionName = "parking")
public class ParkingPass {

    @DocumentId
    public String id;
    public String lot;
    public String seller;
    public double price;

    public ParkingPass() {
    }

    public ParkingPass(@JsonProperty("id") String id,
                       @JsonProperty("lot") String lot,
                       @JsonProperty("seller") String seller,
                       @JsonProperty("price") double price) {
                        this.id = id;
                        this.lot = lot;
                        this.seller = seller;
                        this.price = price;
                       }
    
    public void setId(String id) {
        this.id = id;
    }

    public void setLot(String lot) {
        this.lot = lot;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getId() {
        return this.id;
    }

    public String getLot() {
        return this.lot;
    }

    public String getSeller() {
        return this.seller;
    }

    public double getPrice() {
        return this.price;
    }
}
