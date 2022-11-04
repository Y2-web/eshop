import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { SessionService } from '../session.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  loginForm: FormGroup;
  users: User[] = [];
  constructor(private serviceSession:SessionService, private service:UsersService, private http: HttpClient,private fb: FormBuilder,private router:Router) 
  {
    this.loginForm = fb.group({username: fb.control(''), password: fb.control('')});
    // this.searchForm = fs.group({search: fs.control('')});
  }

  ngOnInit(): void {
    this.service.getUsers().subscribe((data:User[]) => {this.users = data;})
  }
   
  // getUsers()
  // {
  //   this.service.getUsers().subscribe((data:User[]) => {this.users = data;})
  // }

  checkUser()
  {
    //console.log("okay");
    console.log(this.users);
    for(let i=0;i< this.users.length; i++)
    {
      if(this.loginForm.value.username == this.users[i].username && this.loginForm.value.password == this.users[i].password)
      {
        console.log("Bienvenue " + this.users[i].username);
        this.serviceSession.userSession(this.users[i]);
        console.log("login form session test : " + this.serviceSession.utilisateur.username);
        this.router.navigate(['/search-book']);
      }
    }
  }
  submit()
  {
    console.log(this.loginForm.value);
  }
}


