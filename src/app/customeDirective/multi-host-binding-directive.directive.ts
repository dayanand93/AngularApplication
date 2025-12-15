import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMultiHostBinding]',
  standalone: true
})
export class MultiHostBindingDirectiveDirective {

  constructor() { }
  @HostBinding('style.color') elementColor:string='red';
  @HostBinding('style.fontSize') fontSize:string='20px';

}
