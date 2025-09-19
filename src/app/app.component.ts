import { Component, ViewEncapsulation } from '@angular/core';
//import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation:ViewEncapsulation.None // apply the css all the componet
})
export class AppComponent {
  title = 'Angular-apps';
}
