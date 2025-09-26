import { Component, DoCheck, OnDestroy, OnInit, signal } from '@angular/core';
import { UsersercicesService } from '../service/usersercices.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  providers: [UsersercicesService],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit,OnDestroy {
   empInfoGet: any;
  //empInfoGet = signal<any[]>([]);
  //empInfoGet = signal([]);
  isloading: boolean = false;
  subscription: Subscription | undefined;
  constructor(private userS: UsersercicesService) {}
  ngOnInit(): void {
    this.getdata();
    
  }
  getdata(): void {
    this.isloading = true;
      // this.subscription =
   this.userS.getDataInfo().subscribe((data) => {
     this.empInfoGet = data;
    //this.empInfoGet.set(data)
      this.isloading = false;
      console.log(data);
    });
  }
  


  // memory leak in angular
  ngOnDestroy(): void {
    this.buttonclick();
  }
  buttonclick() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Unsubscribed successfully');
    }
  }
  
}
