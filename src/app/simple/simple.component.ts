import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simple',
  standalone: true,
  imports: [],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.css'
})
export class SimpleComponent implements OnChanges {
 @Input() simpleInput: string = "";

  ngOnChanges(changes: SimpleChanges) {
    //ngonchange without input property will not work, it will not trigger the ngOnChanges method
    //console.log('ngOnChanges called with value:', this.simpleInput);
    // how to print previous value and current value in ngOnChanges
    if (changes['simpleInput']) {
      const previousValue = changes['simpleInput'].previousValue;
      const currentValue = changes['simpleInput'].currentValue;
      console.log('Previous value:', previousValue);
      console.log('Current value:', currentValue);
    }
  }
}
