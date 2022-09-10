import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Conto } from 'src/app/model/conto.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  elementi: Conto[];
  isAuthenticated = false;
  private userSub: Subscription;
 
  

  constructor( public authService: AuthService) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  logout(){
    this.authService.logout();
  }

}
