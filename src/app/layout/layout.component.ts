import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  routes = inject(Router)
    logout() {
        // Clear any authentication tokens or user data here
        // For example, if you're using localStorage:
        
        sessionStorage.removeItem('isLogin');
        // Redirect to the login page
        this.routes.navigate(['/login']);
    }
}
