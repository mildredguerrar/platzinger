import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  friends: User [];
  constructor() {

    getUsers(){}
 }

 getFriends(){
   return this.friends;
 }
}

