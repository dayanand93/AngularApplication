import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersercicesService {

  constructor(private htttp:HttpClient) { }
  //public baseurls = environment.BASEURL;

  getDataInfo():Observable<any>{
    return this.htttp.get<any>('https://jsonplaceholder.typicode.com/users')
  }
  getuser(id:number):Observable<any>{
    return this.htttp.get<any>('https://jsonplaceholder.typicode.com/users/' + id)
  }
}
