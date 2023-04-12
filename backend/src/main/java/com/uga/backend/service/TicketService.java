package com.uga.backend.service;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.uga.backend.entity.Ticket;

@Service
public class TicketService {
    
    private static final String COLLECTION_NAME = "tickets";

    public String saveTicket(Ticket ticket) {
        Firestore db = FirestoreClient.getFirestore();
        
        try {
            ApiFuture<WriteResult> apiFutureWriteResult = db.collection(COLLECTION_NAME).document(ticket.getId()).set(ticket);
            return apiFutureWriteResult.get().getUpdateTime().toString();
        } catch (InterruptedException | ExecutionException e) {
            return e.getMessage();
        }
    }

    public Ticket getTicket(String id) {
        Firestore db = FirestoreClient.getFirestore();
        try {
            DocumentReference document = db.collection(COLLECTION_NAME).document(id);
            ApiFuture<DocumentSnapshot> future = document.get();

            DocumentSnapshot doc = future.get();

            if (doc.exists()) {
                return doc.toObject(Ticket.class);
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }


    public List<Ticket> getTicketsAll() {
        try {
            Firestore db = FirestoreClient.getFirestore();

            Iterable<DocumentReference> iterable = db.collection(COLLECTION_NAME).listDocuments();
            Iterator<DocumentReference> iterator = iterable.iterator();

            List<Ticket> ticketList = new ArrayList<>();

            while (iterator.hasNext()) {
                DocumentReference documentReferece = iterator.next();
                ApiFuture<DocumentSnapshot> apiFuture = documentReferece.get();
                DocumentSnapshot documentSnapshot = apiFuture.get();

                Ticket ticket = documentSnapshot.toObject(Ticket.class);
                ticketList.add(ticket);
            }


            return ticketList;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

}