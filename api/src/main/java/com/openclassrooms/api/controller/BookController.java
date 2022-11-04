package com.openclassrooms.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.openclassrooms.api.model.Book;
import com.openclassrooms.api.model.User;
import com.openclassrooms.api.service.BookService;
import com.openclassrooms.api.service.UserService;
@CrossOrigin(origins="http://localhost:4200")

@RestController

public class BookController 
{

    @Autowired
    private BookService bookService;
    @Autowired
    private UserService userService;

    /**
    * Read - Get all employees
    * @return - An Iterable object of Employee full filled
    */
    @GetMapping("/books")
    public ResponseEntity<List<Book>> getBooks() 
    {
    	List<Book> liste = bookService.getBooks();
        return new ResponseEntity<>(liste,HttpStatus.OK);
    }
    
    @GetMapping("/userBooks")  // Pour renvoyer la liste des livres qui appartiennent a chaque user
    public ResponseEntity<List<Book>> getUserBooks(Long id)
    {
    	Optional<User> opt=userService.getUser(id);
    	if(opt.isPresent())
    	{
    	return ResponseEntity.ok(opt.get().getBooks());
    	}
    	else
    	{
    		return ResponseEntity.badRequest().build();
    	}
    	
    }
    
   @DeleteMapping("/delete/{id}") 
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable("id") long id) 
   {
	try {
		bookService.deleteBook(id);
		return new ResponseEntity<>(HttpStatus.OK);
	    }
	catch(Exception e) 
	    {
	    	return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
   }    
   @PostMapping("/add")
   public ResponseEntity<Book> createBook(@RequestBody Book book)
   {
	try 
	{
	Book livre = bookService.saveBook(book);
	return new ResponseEntity<>(livre,HttpStatus.CREATED);
	}
	catch(Exception e)
	{
    return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	   
   }



