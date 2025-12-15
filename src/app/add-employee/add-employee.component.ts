import { Component, DoCheck, OnDestroy, OnInit, signal } from '@angular/core';
import { UsersercicesService } from '../service/usersercices.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { concatMap, delay, from, mergeMap, of, Subscription, switchMap } from 'rxjs';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [UsersercicesService],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  empInfoGet: any;
  //empInfoGet = signal<any[]>([]);
  //empInfoGet = signal([]);
  isloading: boolean = false;
  subscription: Subscription | undefined;
  constructor(private userS: UsersercicesService) {}
  ngOnInit(): void {
    this.getdata();
    this.concateMapExmaples();
    // this.mergeMapExmaples();
    this.switchMapExmaples();
  }
  getdata(): void {
    this.isloading = true;
    // this.subscription =
 // this.empInfoGet = this.userS.getDataInfo() use for async pipe
    this.userS.getDataInfo().subscribe((data) => {
     this.empInfoGet = data;
      //this.empInfoGet.set(data)
      this.isloading = false;
      console.log('get data show ',data);
    });
  }

  sortDirection: boolean = true;

  sortData(column: string): void {
    const keys = column.split('.');

    this.empInfoGet.sort((a: any, b: any) => {
      let valueA = a;
      let valueB = b;

      // Support nested properties like address.city
      for (let key of keys) {
        valueA = valueA[key];
        valueB = valueB[key];
      }

      if (valueA < valueB) return this.sortDirection ? -1 : 1;
      if (valueA > valueB) return this.sortDirection ? 1 : -1;
      return 0;
    });

    this.sortDirection = !this.sortDirection;
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

  deleteEmployee(id: number) {
    this.empInfoGet = this.empInfoGet.filter(
      (emp: { id: number }) => emp.id !== id
    );
  }

  concateMapExmaples() {
    from([1, 2, 3])
      .pipe(concatMap((val) => of(val).pipe(delay(1000))))
      .subscribe((val) => {
        console.log('concat map example', val); // sequential call output: 1, 2, 3
      });
  }

  mergeMapExmaples() {
    from([1, 2, 3]).pipe(
    mergeMap(val => of(val).pipe(delay(1000)))).subscribe((val)=>{
      console.log('merge map example', val);// parallel call output: 3,1,2 (order may vary
    });
  
  }

    switchMapExmaples() {
      from([1, 2, 3])
        .pipe(switchMap((val) => of(val).pipe(delay(1000))))
        .subscribe(console.log);
        // switchMap call output: 3 old request are cancelled, new request are made
    }
}
