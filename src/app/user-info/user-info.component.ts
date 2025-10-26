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
  showstundent:boolean = false;
  count = 0;
  valdata: any;
  showdata:boolean = true;
  ngOnInit(): void {
    
  }
  sendStundent(): void{
    this.parentdata = "i am your paranet"
    this.showstundent = true
    //this.sendStundent = true
    this.count++
  }
  getdata(value:any){
  this.valdata = value
  }

   corses = [
      {
        id:1,
        name:"MBA",
        descriptions:"MCA loream epsume",
       Image:'assets/images/natureimage.webp'
      },
        {
        id:2,
        name:"BA",
        descriptions:"MCA loream epsumedd",
        Image:'assets/images/natureimage.webp'

      }
   ] 
}
