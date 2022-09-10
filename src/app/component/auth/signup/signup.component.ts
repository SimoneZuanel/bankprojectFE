import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isAuthenticated = false;
  private userSub: Subscription;
  isLoading = false;

  constructor(public authService: AuthService, public router: Router) { }


  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const date = form.value.date;
    const email = form.value.email;
    const password = form.value.password;

       this.authService.signup(firstName, lastName, date, email, password);
    form.reset();
    this.router.navigate(['login']);
  }

}
