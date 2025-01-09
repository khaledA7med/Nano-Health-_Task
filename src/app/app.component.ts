import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterForm } from './registerForm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Nano-Health_Task';
  registerForm!: FormGroup<RegisterForm>;
  submitted: boolean = false;

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm() {
    this.registerForm = new FormGroup<RegisterForm>({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          '^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]{3,}.[a-zA-Z]{2,}$'
        ),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  submitForm() {
    this.submitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      alert('Register Form Success');
    }
  }
}
