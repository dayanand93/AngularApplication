// import { CanActivateFn } from '@angular/router';

// export const resolveGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { ResolveFn } from '@angular/router';
import { UsersercicesService } from '../service/usersercices.service';
import { inject } from '@angular/core';

export const resolveGuard: ResolveFn<any> = (route, state) => {
  // Logic to fetch or prepare data before activating the route
  // data is parsially loaded here
 const myService = inject(UsersercicesService);
  return myService.getDataInfo();

};
