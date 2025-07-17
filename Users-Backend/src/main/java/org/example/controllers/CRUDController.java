package org.example.controllers;

import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface CRUDController<Document, DocumentDTO> {
    ResponseEntity<Document> create(DocumentDTO dto);

    ResponseEntity<Document> update(String id, DocumentDTO dto);

    ResponseEntity<List<Document>> findAll();

    ResponseEntity<Optional<Document>> findById(String id);

    ResponseEntity<Void> deleteById(String id);
}
