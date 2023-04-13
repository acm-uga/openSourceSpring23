package com.uga.backend.repository;

import org.springframework.stereotype.Repository;

import com.google.cloud.spring.data.firestore.FirestoreReactiveRepository;
import com.uga.backend.entity.Textbook;

@Repository
public interface TextbookRepository extends FirestoreReactiveRepository<Textbook> {
    
}
