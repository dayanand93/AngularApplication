import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersercicesService {

  constructor(private http:HttpClient) { }
  //public baseurls = environment.BASEURL;

  getDataInfo():Observable<any>{
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
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
  
}
