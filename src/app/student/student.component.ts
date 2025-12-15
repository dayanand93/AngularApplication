import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
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
 // changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit {
  studentName: string = 'Dachauha';
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
    getclickdata(){
     //  console.log('hi1')
    }
}
