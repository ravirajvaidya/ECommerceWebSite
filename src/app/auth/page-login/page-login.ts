import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-page-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './page-login.html',
  styleUrl: './page-login.css',
})
export class PageLogin {

  constructor(private router: Router) { }

  OnLogInClicked(formData: NgForm): void {
    alert('Login Successfull');
    this.router.navigate(['/']);
  }

  goToSignUp(): void {
    this.router.navigate(['/SignUp']);
  }

  goToForgotPassword(): void {
    this.router.navigate(['/ForgotPassword']);
  }

}
