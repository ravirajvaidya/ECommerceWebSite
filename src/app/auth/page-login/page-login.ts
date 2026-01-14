import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { ServiceAuth } from '../Services/service-auth';

@Component({
  selector: 'app-page-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './page-login.html',
  styleUrl: './page-login.css',
})
export class PageLogin {

  constructor(private router: Router, private authService: ServiceAuth) { }

  async OnLogInClicked(formData: NgForm): Promise<void> {
    try {
      let result = this.authService.signIn(formData.value.email, formData.value.password);
      alert("Welcome : " + (await result).user.email);
      this.router.navigate(['/']);
    }
    catch (err: any) {
      alert(err.message || 'SignIn failed');
    }
  }

  goToSignUp(): void {
    this.router.navigate(['/SignUp']);
  }

  goToForgotPassword(): void {
    this.router.navigate(['/ForgotPassword']);
  }

}
