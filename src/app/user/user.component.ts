import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersercicesService } from '../service/usersercices.service';
import { JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  userDetails: any;
  userDetails2:any
  getfielduser: any;
  
  constructor(private route: ActivatedRoute, private userServices :UsersercicesService, private routerNavigate:Router) {}
  ngOnInit(): void {
    this.getRoutePrameterRize();
    this.getUserInfo();
  }
  getRoutePrameterRize():void{
    let id = this.route.snapshot.params['id'];
   this.userServices.getuser(id).subscribe((res)=>{
       this.userDetails = [res];
       this.userDetails2 = res;
   })
    console.log(this.route)
  }
    
  getUserInfo():void{
   
     this.route.queryParams.subscribe((res)=>{
      this.getfielduser = res['username'];
       //console.log('testingh',res.username)
     })
  }
  
}
