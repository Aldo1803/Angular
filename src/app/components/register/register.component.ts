import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public user: User;
  public status: string;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _userService: UserService,
    public dialog: MatDialog
  ) {
    this.user = new User("", "", "", "", 0, "");
  }

  ngOnInit() {}

  onSubmit(Form) {
    this._userService.register(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          // console.log(response.user);
          this.status = "success";
          this._router.navigate(["/login"]);
        } else {
          this.status = "error";
        }
      },
      error => {
        console.log(error as any);
        this.status = "error";
        this.dialog.open(DialogueComponent, {});
      }
    );
  }
}
