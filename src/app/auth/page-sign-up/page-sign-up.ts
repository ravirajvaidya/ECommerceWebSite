import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ServiceAuth } from '../Services/service-auth';

@Component({
  selector: 'app-page-sign-up',
  imports: [RouterLink, FormsModule],
  templateUrl: './page-sign-up.html',
  styleUrl: './page-sign-up.css',
})
export class PageSignUp {
  role: string = 'User'; // default role

  constructor(private router: Router, private authService: ServiceAuth) { }

  async OnSignUpClicked(formData: NgForm) {

    console.log("Form Values :", formData.value);

    try {
      await this.authService.signUp(
        formData.value.email,
        formData.value.password,
        formData.value.fullName,
        formData.value.mobile
      );

      this.router.navigate(['/Login']);

    } catch (err: any) {
      alert(err.message || 'Signup failed');
    }
  }

  goToLoginPage(): void {
    this.router.navigate(['/Login']);
  }
}
