import { Component, DoCheck, OnDestroy, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { UsersercicesService } from '../service/usersercices.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { concatMap, delay, from, mergeMap, of, Subscription, switchMap } from 'rxjs';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, RouterLink],
 // providers: [UsersercicesService], //this is not required if we use providedIn:'root' in service
                                  // but providedIn:'root' makes singleton service across the app
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  //encapsulation: ViewEncapsulation.ShadowDom //
})
export class AddEmployeeComponent implements OnInit, OnDestroy {
  empInfoGet: any;
  //empInfoGet = signal<any[]>([]);
  //empInfoGet = signal([]);
  isloading: boolean = false;
  subscription: Subscription | undefined;
  constructor(private userS: UsersercicesService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.getdata();
     //this.getdataResolve()
    this.concateMapExmaples();
   // this.mergeMapExmaples();
    //this.switchMapExmaples();
  }
  getdata(): void {
    this.isloading = true;
    // this.subscription =
 // this.empInfoGet = this.userS.getDataInfo() use for async pipe
    this.subscription = this.userS.getDataInfo().subscribe((data) => {
     this.empInfoGet = data;
      //this.empInfoGet.set(data)
      this.isloading = false;
      console.log('get data show ',data);
    });
  }
// uses resolve guard to get the data from the server before the component is loaded
 getdataResolve(): void {
    this.isloading = true;
   this.empInfoGet = this.activatedRoute.snapshot.data['data'];
  console.log('get data show using resolve guard', this.empInfoGet);
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
    //console.log('component destroyed');
  }
  buttonclick() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('Unsubscribed successfully');// to prevent memory leaks . // this is important when we have long lived subscriptions
    }
  }

  deleteEmployee(id: number) {
    this.empInfoGet = this.empInfoGet.filter(
      (emp: { id: number }) => emp.id !== id
    );
  }

  concateMapExmaples() {
    from([1, 2, 3])
      .pipe(concatMap((val) => of(val).pipe(delay(5000))))
      .subscribe((val) => {
        console.log('concat map example', val); // sequential call output: 1, 2, 3
        // concatMap call output: 1, 2, 3 all request are made in sequential order and executed after 5 second delay
      });
  }

  mergeMapExmaples() {
    from([1, 2, 3]).pipe(
    mergeMap(val => of(val).pipe(delay(5000)))).subscribe((val)=>{
      console.log('merge map example', val);// parallel call output: 1, 2, 3 (order may vary
      // mergeMap call output: 1, 2, 3 all request are made in parallel and executed after 5 second delay
      // mergeMap does not cancel the previous request and make new request, so all request will be executed in same time after 5 second delay
    });
  
  }

    switchMapExmaples() {
      from([1, 2, 3, 4])
        .pipe(switchMap((val) => of(val).pipe(delay(5000))))
        .subscribe((val => {
          console.log('switch map example', val);
        }));
        // switchmap caneal the previous request and make new request, so only last request will be executed
        // 1,2,3 will be cancelled and only 4 will be executed after 5 second delay
        // switchMap call output: 4 old request are cancelled, new request are made
    }
}
