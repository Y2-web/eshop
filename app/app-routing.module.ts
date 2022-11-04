import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SearchBookComponent } from './search-book/search-book.component'; 



const routes: Routes = [
  { path: "login-form", component: LoginFormComponent},
  { path: "search-book", component: SearchBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
