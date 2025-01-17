import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupData = { name: '', email: '', password: '' };

  onSignup() {
    console.log('Signing up...', this.signupData);
  }
}
