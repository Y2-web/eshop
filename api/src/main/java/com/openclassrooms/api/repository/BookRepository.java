package com.openclassrooms.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.openclassrooms.api.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

}
