import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // return next(req);
  const setKey = 'test12345';
  const authReq = req.clone({
    setParams: { 'api_key': setKey}
  });
  return next(authReq);
/** how to set the tockens* */
  /*
   1. Store the Token After Login
When the user logs in and you receive a token (e.g., JWT) from the backend, store it in a secure place:

// Example in a service
login(credentials: any) {
  return this.http.post('/api/login', credentials).subscribe((response: any) => {
    localStorage.setItem('userToken', response.token); // or sessionStorage
  });
}


 const token = localStorage.getItem('userToken');
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
*/

};
