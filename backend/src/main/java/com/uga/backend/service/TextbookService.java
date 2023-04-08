package com.uga.backend.service;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.server.ServerRequest;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QuerySnapshot;
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
    
    public List<Textbook> getTextbooksAll() {
        try {
            Firestore db = FirestoreClient.getFirestore();

            Iterable<DocumentReference> iterable = db.collection(COLLECTION_NAME).listDocuments();
            Iterator<DocumentReference> iterator = iterable.iterator();

            List<Textbook> textbookList = new ArrayList<>();

            while (iterator.hasNext()) {
                DocumentReference documentReferece = iterator.next();
                ApiFuture<DocumentSnapshot> apiFuture = documentReferece.get();
                DocumentSnapshot documentSnapshot = apiFuture.get();

                Textbook book = documentSnapshot.toObject(Textbook.class);
                textbookList.add(book);
            }


            return textbookList;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }
    }

}
