import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  regNumber: string = "admin";
  regPassword: string = "admin";
  
  constructor(private router: Router) { }

  ngOnInit(): void { }

  getAll(ref: string, pin: string) {
    if (ref == this.regNumber && pin == this.regPassword) {
      console.log("user confirmed");
	  this.router.navigate(['/dashboard']);
    }
	else {
		this.router.navigate(['/login']);
	}
  }
  
// validation
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    registration_No: new FormControl('', [Validators.required, Validators.maxLength(13)]),
    pin: new FormControl('', [Validators.required, Validators.maxLength(4)])
  });


}

