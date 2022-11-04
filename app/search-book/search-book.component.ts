import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Button } from 'primeng/button';
import { Book } from '../book';
import { BooksService } from '../books.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { User } from '../user';
import { SessionService } from '../session.service';



@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.scss']
})
export class SearchBookComponent implements OnInit {


books: Book[] = [];
result: Array<Book> = [];
searchForm: FormGroup;
bookForm: FormGroup;



  constructor(private serviceSession:SessionService, private service:BooksService, private http: HttpClient,private fb: FormBuilder,private fs: FormBuilder) 
  { 
   this.bookForm = fb.group({titre: fb.control(''), auteur: fb.control(''), editeur: fb.control(''), annee:fb.control('')});
   this.searchForm = fs.group({search: fs.control('')});
  }


/*
   @Output()
   searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(event: any){
    //this.searchTextChanged.emit(this.enteredSearchValue);
    console.log(event);
  }*/

utilisateur: User = this.serviceSession.utilisateur; // faire un subscribe à l'interieur du addBook pour eviter les problemes de asynchrone
recherche: string = "";
searchBook()
{
console.log(this.searchForm.value.search);
this.recherche = this.searchForm.value.search;
}


  addBook()
  {
  console.log(this.bookForm.value);
  var Nlivre = new Book(null,this.bookForm.value.titre,this.bookForm.value.auteur,this.bookForm.value.editeur,this.bookForm.value.annee,this.utilisateur.id);     
this.service.addBookS(Nlivre).subscribe((data: any )=>this.getBooks());
console.log("Ce livre a ete ajoute par le user d'id: " + Nlivre.idU);
  }

 /* Nlivre: Book= {
    "id": 3,        
    "titre": this.bookForm.value.titre,
    "auteur": this.bookForm.value.auteur,
    "editeur": this.bookForm.value.editeur,
    "annee": this.bookForm.value.annee
} ;*/



  //search(){this.result= this.service.getBooks();}

  ngOnInit(): void {

  }

  getBooks(){
    this.service.getBooksS().subscribe((data: Book[]) => {
      this.books = data;
      //console.log(this.books);
    });

  }
  deleteBook(id: number)
  {
    this.service.deleteBookS(id).subscribe((data: any )=>this.getBooks());
  }






 /* supp(id: number)
  {
    //for(let book of this.books)
    //{
    //this.moins.nativeElement.style.color = "white";
    console.log(id);
    this.deleteBook(id);
    //}
  }*/


}


