import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  //title = 'eshop';
  constructor()
  {

  }
  
  onButtonClick(opt:String|null = "")
  {
    console.log("Hello Test" + opt);
  }

  searchText: string = "";
  onSearchTextEntered(searchValue: string)
  {
   this.searchText = searchValue;
   console.log(this.searchText);
  }


}
