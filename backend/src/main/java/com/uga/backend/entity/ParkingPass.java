package com.uga.backend.entity;


import org.springframework.data.annotation.Id;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.cloud.spring.data.firestore.Document;

@Document(collectionName = "parking")
public class ParkingPass {

    @DocumentId
    public String id;
    public String lot;
    public String seller;
    public double price;
    public String contactInfo;
    public String additionalDetails;

    public ParkingPass() {
    }

    public ParkingPass(
                       @JsonProperty("lot") String lot,
                       @JsonProperty("seller") String seller,
                       @JsonProperty("price") double price,
                       @JsonProperty("contactInfo") String contactInfo,
                       @JsonProperty("additionalDetails") String additionalDetails) {
                        this.lot = lot;
                        this.seller = seller;
                        this.price = price;
                        this.contactInfo = contactInfo;
                        this.additionalDetails = additionalDetails;
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

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public void setAdditionalDetails(String additionalDetails) {
        this.additionalDetails = additionalDetails;
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

    public String getContactInfo() {
        return this.contactInfo;
    }

    public String getAdditionalDetails() {
        return this.additionalDetails;
    }
}
