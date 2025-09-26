import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [StudentComponent,CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit{
  parentdata: any;
  showstundent:boolean = false
  valdata: any;
  ngOnInit(): void {
    
  }
  sendStundent(): void{
    this.parentdata = "i am your paranet"
    this.showstundent = true
    //this.sendStundent = true
  }
  getdata(value:any){
  this.valdata = value
  }
}
