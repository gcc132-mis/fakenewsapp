import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
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
    const token: any = await this.authService.register(this.user.email, this.password);
    
    // Isto foi necessário, pois o token ainda não existe e o usuário
    // precisa ser cadastrado na base de dados da API
    await this.userService.add(this.user, token.access_token);
    this.user = new UserModel();
    this.password = "";
    this.confPassword = "";
  }

}
