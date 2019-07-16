import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[UserService]
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private userService: UserService) { 
  }

  ngOnInit() {
    //this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.userService.userModel = {
      name: '',
      password: '',
      email: '',
      phone: '',
    }
  }
  onSubmit(form: NgForm){
    this.userService.registerUser(this.userService.userModel).subscribe(
      (res:any) =>{
        if(res.Suceeded){
          console.log("Registration successfully!!!")
        }
        else{
          console.log("Registration unsuccessful" + res.Errors[0])
        }
      }
    )
  }

}
