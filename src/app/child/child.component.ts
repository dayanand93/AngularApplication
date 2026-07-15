import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  str :string = "i am your child component"
  count = 0;
  incrementCount() {
    this.count++;
  }
  decrementCount() {
    this.count--;
  }
    mymethod(){
        alert("hello from child component method");
    }
    
    
}
