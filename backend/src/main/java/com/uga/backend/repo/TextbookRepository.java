package com.uga.backend.repo;

import org.springframework.cloud.gcp.data.firestore.FirestoreReactiveRepository;
import org.springframework.stereotype.Repository;

import com.uga.backend.entity.Textbook;

@Repository
public interface TextbookRepository extends FirestoreReactiveRepository<Textbook> {
    
}
