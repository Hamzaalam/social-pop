import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.userService.userModel.email)
    console.log(this.userService.userModel.password)

    this.userService.login(this.userService.userModel.email,
                           this.userService.userModel.password)
                           .subscribe((data : any)=>{
                            console.log(data)
                            localStorage.setItem('token',data.token);
                            this.router.navigate(['/dashboard']);
                          }
                          );
            }

}
