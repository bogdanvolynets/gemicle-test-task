import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl: string = 'https://randomuser.me/api/?inc=login,picture,location,email,gender,dob,phone,name&password=number,8-12&noinfo&results=20'

  constructor(private http: HttpClient) { }

  getUsersData(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }
}