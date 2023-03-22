package com.uga.backend.service;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;

import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.uga.backend.entity.Textbook;

@Service
public class TextbookService {
    
    private static final String COLLECTION_NAME = "textbooks";

    public String saveTextbook(Textbook textbook) {
        Firestore db = FirestoreClient.getFirestore();
        
        try {
            ApiFuture<WriteResult> apiFutureWriteResult = db.collection(COLLECTION_NAME).document(textbook.getName()).set(textbook);
            return apiFutureWriteResult.get().getUpdateTime().toString();
        } catch (InterruptedException | ExecutionException e) {
            return e.getMessage();
        }
    }

    public Textbook getTextbook(String name) {
        Firestore db = FirestoreClient.getFirestore();
        try {
            DocumentReference document = db.collection(COLLECTION_NAME).document(name);
            ApiFuture<DocumentSnapshot> future = document.get();

            DocumentSnapshot doc = future.get();

            if (doc.exists()) {
                return doc.toObject(Textbook.class);
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }

}
