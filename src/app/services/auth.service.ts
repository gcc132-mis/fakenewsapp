import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  async checkToken() {
    let res = await this.storage.get(TOKEN_KEY);
    if (res) {
      this.authState.next(true);
    }
  }

  async login() {
    await this.storage.set(TOKEN_KEY, 'Bearer 1234567');
    this.authState.next(true);
  }

  async logout() {
    await this.storage.remove(TOKEN_KEY);
    this.authState.next(false);
  }

  isAuthenticated(): boolean {
    return this.authState.value;
  }
}
