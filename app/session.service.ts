import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  utilisateur!: User;
  constructor() { }

  userSession(user: User)
  {
   this.utilisateur = user;
   return user;
  }

}
