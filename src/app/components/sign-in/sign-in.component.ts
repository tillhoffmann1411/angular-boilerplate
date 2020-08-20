import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { UserHttpService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserHttpService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  async signIn() {
    console.log(this.signInForm.value);
    if (this.signInForm.valid) {
      try {
        const response = await this.userService.signIn(this.signInForm.value.email, this.signInForm.value.password);
        this.error = false;
        console.log('Login response:', response);
      } catch (error) {
        console.log('Could not sign in');
        this.error = true;
      }
    } else {
      this.error = true;
    }
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

}
