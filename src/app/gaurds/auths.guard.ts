import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authsGuard: CanActivateFn = (route, state) => {
  const isLogin = sessionStorage.getItem('isLogin');
  const router = inject(Router);
 
  if (isLogin !== 'true') {
    alert('Please login first');
    return router.createUrlTree(['/login']); // Block navigation and redirect
  }

  return true;
};
