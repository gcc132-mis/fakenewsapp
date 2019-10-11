import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { AuthService } from './auth.service';

const API_URL: string = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient) { }

  getUserByEmail(email: string) {
    return this.http.get(`${API_URL}/users?email=${email}`).map(
      (users: UserModel[]) => {
        const user = users[0];
        return (users.length == 0) ? null : new UserModel(user.id, user.name, user.email);
      }
    ).toPromise();
  }

  add(user: UserModel) {
    return this.http.post(`${API_URL}/users`, user).toPromise();
  }
}
