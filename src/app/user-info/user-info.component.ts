import { Component, effect, OnInit, signal } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [StudentComponent, CommonModule, FormsModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit{
  parentdata: any;
  showstundent:boolean = false;
  count = 0;
  valdata: any;
  showdata:boolean = true;
  username: string = "";

 // countNum = 0;
 countNum = signal(0);

     constructor(private route :Router) { 
   //   console.log("counter", this.countNum);
      effect(() => {
         console.log("track the counter value", this.countNum());
      });
     }
  ngOnInit(): void {
    this.observableExample();
    this.exampleofSubject();
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
       // Image:'assets/images/natureimage.webp'
      // Image:'assets/images/natureimage.webp'
      },
        {
        id:2,
        name:"BA",
        descriptions:"MCA loream epsumedd",
       // Image:'assets/images/natureimage.webp'

      }
   ] 

   userDetails (){
     this.route.navigate(['/layout','user'], 
      {queryParams:{username:this.username}
    }
  )

   // alert ("Welcome " + this.username)
   }
 singlesCount(){
   // this.countNum++;
    this.countNum.set(this.countNum() + 1)
 }

 observableExample(){
    // An Observable is a lazy Push collection of multiple values.
    // Observables are unicast: each subscribed Observer owns an independent execution of the Observable.
   // observables are cold by default
    const ObservableEX = new Observable(subscriber => {
      subscriber.next(Math.random());
            
   })
   ObservableEX.subscribe((res)=>{
    console.log("observable example", res)
   });
   ObservableEX.subscribe((res)=>{
    console.log("observable example2", res)   
   })
  }

   exampleofSubject(){
    // Subject is a special type of Observable that allows values to be multicasted to many Observers.
    // Subjects are like EventEmitters: they maintain a registry of many listeners.
    // All the subscribers will receive the same value when it is emitted.
    // subjects are hot observables
      const subject = new Subject<number>();
      subject.subscribe((res)=>{
        console.log("subject example", res)
      })
      subject.next(Math.random());
       subject.next(Math.random());
   }

}