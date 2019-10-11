import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: UserModel = new UserModel();
  password: string;
  confPassword: string;

  constructor(
    public authService: AuthService,
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  async save() {
    await this.authService.register(this.user.email, this.password);
    await this.userService.add(this.user);
    this.user = new UserModel();
    this.password = "";
    this.confPassword = "";
  }

}
