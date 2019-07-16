import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  rootURL = "http://localhost:4000"
  
  userModel: User = {
    name:'',
    phone:'',
    email:'',
    password:''
  }
  constructor(private http: HttpClient) { }

  registerUser(userData){
    return this.http.post(this.rootURL + '/users/register', userData);

  }

}
