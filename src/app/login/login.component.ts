import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersercicesService } from '../service/usersercices.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  @Output() outputSendEvent: EventEmitter<any> = new EventEmitter();
  flagdata: boolean = false;

  email: string = '';
  password: string = '';

  loginForm: FormGroup | undefined;

  constructor(private fb: FormBuilder ,private router :Router, private userS:UsersercicesService) {}
  ngOnInit(): void {
    this.loginedForm();
    this.profilesShow();
  }
  loginedForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  isLogin(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
   const payload ={
      email:this.email,
      password:this.password
    }
    console.log(payload);
    this.userS.getTokent(payload).subscribe((result)=>{
    localStorage.setItem("token",result.token)
    })

    this.router.navigate(['/profile']);
  }
  profilesShow(){
    this.userS.profile().subscribe((results)=>{
      console.log('test',results)
    })
  }
     
}
