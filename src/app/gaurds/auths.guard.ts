import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authsGuard: CanActivateFn = (route, state) => {
  const isLogin = sessionStorage.getItem('isLogin');
  const router = inject(Router);
 // constructor(private router: Router) {}
// in functional gaurd will not create  constructor, so we will use inject() method to get the instance of router
  if (isLogin !== 'true') {
    //isLogin !== 'true' means user is not logged in, so we will block the navigation and redirect to login page
     alert('Please login first, redirecting to login page');
     return router.navigate(['/login']); // Block navigation and redirect
  }

  return true;
};
