import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public identity;
   constructor(private userService: UserService, private router: Router) {

   }


   ngOnInit() {
   this.identity = this.userService.getIdentity();

   }
   onClick() {

     localStorage.clear();
     this.router.navigate(['/login']);

   }
}
