import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.None // apply the css all the componet
})
export class AppComponent implements OnInit{

  title = 'Angular-apps';
  loginflag:boolean = false
  constructor(private router:Router, private titleService:Title){}
  // public setTitle(newTitle: string) {
  //   this.titleService.setTitle(newTitle);
  // }
  ngOnInit(): void {
    /*how to set the title using title services in angular */
   this.titleService.setTitle("Login Page");
  }
  
  

  handleLogin(value:any){
    console.log("test bollean data",value)
  }
  navigateMainpage(){
      this.loginflag = true;
  }
}
