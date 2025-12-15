import { CanActivateFn } from '@angular/router';

export const authsGuard: CanActivateFn = (route, state) => {
  return true;
};
