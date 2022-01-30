import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  passwordFormControl = new FormControl('', [
    Validators.required,

  ])

  constructor() { }

  ngOnInit(): void {
  }

}

// validation
// function Login() {
//   if (document.getElementById('registration').value == admin & document.getElementById('pin').value == 1234) {
//     document.getElementById("pin").style.display = 'none'
//   } else {
//     document.getElementById('pin').style.display = 'block'
//   }
// }