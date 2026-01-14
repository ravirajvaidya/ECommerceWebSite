import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-sign-up',
  imports: [RouterLink, FormsModule],
  templateUrl: './page-sign-up.html',
  styleUrl: './page-sign-up.css',
})
export class PageSignUp {
  role: string = 'User'; // default role

  constructor(private router: Router) { }

  OnSignUpClicked(formData: NgForm) {
    // TODO: Call signup API here
    // Payload should include role = 'User'

    alert('Role:' + this.role);

    // Redirect after successful signup
    // this.router.navigate(['/Login']);
  }

  goToLoginPage(): void {
    this.router.navigate(['/Login']);
  }
}
