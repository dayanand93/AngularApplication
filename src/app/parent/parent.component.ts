import { AfterViewInit, Component, ViewChild, viewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent) childs !: ChildComponent;
  showchiltstrdata: any
  
  ngAfterViewInit(): void {
    // this.showchiltstrdata = this.childs.str;
    console.log(this.childs.str);
  }
     childdata(){
        alert(this.childs.str);
     }  
  accesschild(){
    this.showchiltstrdata = this.childs.mymethod();
   // this.childs.mymethod();
  }
}
