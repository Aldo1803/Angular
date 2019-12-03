import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-removing',
  templateUrl: './removing.component.html',
  styleUrls: ['./removing.component.css']
})
export class RemovingComponent implements OnInit {
  public user: User;
  public saving;
  public toSave;
  public finalAmount;
  public _id;
  public show;
  public userAmount;
  constructor(private userService: UserService, private router: Router) {
    this.saving = this.userService.getSaving();

    this.user = new User('', '', '', '', 0, '', 0);
    this.show = false;
    this.userAmount = this.userService.getIdentity().amount;
  }

  ngOnInit() {}

  onSubmit() {
    if (this.toSave <= this.saving) {
    this.finalAmount = this.saving - parseFloat(this.toSave) ;
    this._id = this.userService.getIdentity()._id;
    this.user.saving = this.finalAmount;
    this.user._id = this._id;
    this.user.amount = this.userAmount;
    this.userService.saving(this.user).subscribe(
      response => {


        localStorage.setItem('identity', JSON.stringify(response.user));
        this.user = response.user;
        this.router.navigate(['/home']);
        this.show = false;
      },
      error => {
        console.log(error as any);
      }
    );

  } else {
    this.show = true;
  }
}
}
