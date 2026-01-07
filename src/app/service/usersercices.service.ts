import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root' // this makes singleton service across the app                                                  
})

// @Injectable() // use this when we provide service in component providers array
                 //  use thsis normall serevice  or  this is not singleton across the app
export class UsersercicesService {

  constructor(private http:HttpClient) { }
  //public baseurls = environment.BASEURL;
   baseurls = constant.BASEURL;


  getDataInfo():Observable<any>{
    return this.http.get<any>(this.baseurls + 'users'); // users is endpoint
   // return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
    //return this.http.get<any>('https://jsonplaceholder.typicode.com/todos')
   // return this.http.get<any>('http://mu.mule-training.com/american-ws/flights?destination=LAX')
  }
  getuser(id:number):Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + id)
  }
  getTokent(tokens:any):Observable<any>{
    return this.http.get<any>('')
  }
  profile():Observable<any>{
    // let HeadersSet = new HttpHeaders().set("Autherization",`bearer` ${localStorage.getIteam('token')})
    //   return this.htttp.post<any>('',{},{HeadersSet})
    
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>('YOUR_API_ENDPOINT', {}, { headers });
    
  }
   getUserdata(data:any):Observable<any>{
    return this.http.post<any>('https://projectapi.gerasim.in/api/BankLoan/login',data)
   }
  
}
