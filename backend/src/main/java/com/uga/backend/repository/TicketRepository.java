package com.uga.backend.repository;

import org.springframework.stereotype.Repository;

import com.google.cloud.spring.data.firestore.FirestoreReactiveRepository;
import com.uga.backend.entity.Ticket;

@Repository
public interface TicketRepository extends FirestoreReactiveRepository<Ticket> {

}
