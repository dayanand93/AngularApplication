import { CommonModule } from '@angular/common';
import {
  Component,
  DoCheck,
  EventEmitter,
  input,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  @Input() inputvar: any;
  @Output() myoutputdata: EventEmitter<any> = new EventEmitter<any>();
  senddataToParent = 'studentdata';
  constructor() {}
  ngOnInit(): void {
    console.log(this.inputvar);
  }
  btnInfo() {
    this.myoutputdata.emit(this.senddataToParent);
  }

  //  ngDoCheck(): void { //Purpose: Allows custom change detection logic.
  //    console.log('hi')
  //  }
}
