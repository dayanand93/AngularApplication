import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent) childs !: ChildComponent;
  showchiltstrdata: any
  childataaceess: string = '';
  increment: void | undefined;
  
  ngOnInit(): void {
    this.examlesofPromise();
  }

  ngAfterViewInit(): void {
    // this.showchiltstrdata = this.childs.str;
  
    console.log(this.childs.str);

  }
     childdata(){
      //  alert(this.childs.str);
       this.increment = this.childs.incrementCount();
     }  
  accesschild(){
   // this.showchiltstrdata = this.childs.mymethod();
     this.childataaceess = this.childs.str;
   this.childs.mymethod();
    
  }
  incrementCount() {
    this.childs.incrementCount();
  }
  decrementCount() {
    this.childs.decrementCount();
  }
  examlesofPromise(){
    const myPromise = new Promise((resolve, reject) => {
      console.log("Promise is pending...");
      setTimeout(() => {
        const data = "Promise resolved successfully!";
        resolve(data);
      }, 2000);
    });
    myPromise.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });
  }
  
}
