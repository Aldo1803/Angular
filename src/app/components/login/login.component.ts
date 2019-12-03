import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public user: User;
  public status: string;
  public identity;
  public token: string;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User('', '', '', '', 0, '');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user.email);
    console.log(this.user.password);
    this.userService.login(this.user).subscribe(response => {
      console.log(response.user);
      this.identity = response.user;
      if (!this.identity || !this.identity._id) {
      this.status = 'error';
      } else {
        this.status = 'success';

        localStorage.setItem('identity', JSON.stringify(this.identity));
        this.getToken();

        this.router.navigate(['/home']);
      }


    }, error => {
    console.log(error as any);
    this.status = 'error';
    });
  }

  getToken() {
    console.log(this.user.email);
    console.log(this.user.password);
    this.userService.login(this.user, 'true').subscribe(response => {

      this.token = response.token;

      if (this.token.length <= 0) {
        this.status = 'error';
      } else {
        this.status = 'success' ;
        console.log(this.token);

      }
      this.status = 'success';
      localStorage.setItem('token', this.token);
      this.router.navigate(['/home']);
    }, error => {
      console.log(error as any);
      this.status = 'error';
    });
  }



}
