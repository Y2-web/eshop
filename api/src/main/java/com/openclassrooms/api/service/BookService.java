package com.openclassrooms.api.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.openclassrooms.api.model.Book;
import com.openclassrooms.api.repository.BookRepository;

import lombok.Data;

//@Data
@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Optional<Book> getBook(final Long id) {
        return bookRepository.findById(id);
    }

    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    public void deleteBook(final Long id) {
        bookRepository.deleteById(id);
    }

    public Book saveBook(Book book) {
        Book savedBook = bookRepository.save(book);
        return savedBook;
    }

}