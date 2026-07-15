import { Component, computed, effect, OnInit, signal, WritableSignal } from '@angular/core';
import { StudentComponent } from '../student/student.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { SimpleComponent } from '../simple/simple.component';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [StudentComponent, CommonModule, FormsModule, ReactiveFormsModule, SimpleComponent],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit{
  parentdata: any;
  showstundent:boolean = false;
  count = 0;
  valdata: any;
  showdata:boolean = true;
  username: string = "daya";
  userText: string = "Hello from parent";
  countNums = 0;
 countNum = signal(0);

     constructor(private route :Router ,private fb: FormBuilder){
   //   console.log("counter", this.countNum);
      // effect(() => {
      //    console.log("track the counter value", this.countNum());
      // });

      // console.log("normal variable", this.countNums);
     }
  ngOnInit(): void {
    this.observableExample();
    this.exampleofSubject();
    this.formDetaildsvalidition();
    this.exampleofSubject2();
    this.examapleofuniqueCastToMultiCast();
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
// what is queryParams 
// queryParams is used to pass data from one component to another component using router.navigate method
   // alert ("Welcome " + this.username)
   // what is difference between router.navigate and router.navigateByUrl
   // router.navigate is used to navigate to a route using an array of route segments and query parameters
   // router.navigateByUrl is used to navigate to a route using a string url
   // difference between queryPrams and params in angular router
   // queryParams is used to pass data from one component to another component using router.navigate method
   // params is used to pass data from one component to another component using routerLink directive
   }
 singlesCount(){
   this.countNums++;
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
       
   }

    mysingleSignal:WritableSignal<string>= signal('Hello Angular 18 Signals');

   // computed signal example
   fisrtName = signal('John');
   lastName = signal('Doe');
   fullName = computed(() => {
      return `${this.fisrtName()} ${this.lastName()}`;
  });
  addFullname(){
   this.fisrtName.set('David');
   this.lastName.set('kumar');
  }
    myForm!: FormGroup;
   formDetaildsvalidition(){
    this.myForm = this.fb.group({
      driverName: ['',Validators.required, Validators.pattern(/^[^#]*$/)],
      
    
    })   

   }
  
   message: string = "";
  showErrormsg(value: string) {
    this.myForm.get
    this.myForm.controls['d riverName']

    this.message =  value;
    console.log("Blur value:", value);
  }


   submitForm(){
    if(this.myForm.valid){
      console.log("form value", this.myForm.value);
    }else{
      console.log("form is invalid");
    }
    }

    // subject example
    exampleofSubject2(){
     const subject = new Subject<number>();
      subject.subscribe((res)=>{
        console.log("subject example2", res)
      })
      subject.subscribe((res)=>{
        console.log("subject example3", res)
      })
      subject.next(Math.random());
    }
    // how to convert obseravle unique cast to subject multi cast
    examapleofuniqueCastToMultiCast(){
      const data = ajax('https://jsonplaceholder.typicode.com/users');
      // data.subscribe((res)=>{
      //   console.log("unique cast", res)
      // })
      // data.subscribe((res)=>{
      //   console.log("unique cast2", res)
      // })

      const subject = new Subject<any>();
      subject.subscribe((res)=>{
        console.log("multi cast 1", res)
      })
       subject.subscribe((res)=>{
        console.log("multi cast 2", res)
      })
     const result = data.subscribe(subject);

    }
   
  
}