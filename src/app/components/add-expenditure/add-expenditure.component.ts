import { Component, OnInit } from "@angular/core";
import { Income } from "../../models/income";
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-expenditure",
  templateUrl: "./add-expenditure.component.html",
  styleUrls: ["./add-expenditure.component.css"]
})
export class AddExpenditureComponent implements OnInit {
  public income: Income;
  public user: User;
  public toSave;
  public userAmount;
  public amountToSave;
  public _id;
  constructor(private userService: UserService, private router: Router) {
    this.income = new Income("", "", 0, "", "", "");
    this.user = new User("", "", "", "", 0, "");
    this.userAmount = this.userService.getIdentity().amount;
    this._id = this.userService.getIdentity()._id;
    this.user._id = this._id;
  }

  ngOnInit() {}

  onSubmit() {
    this.amountToSave = parseFloat(this.userAmount) - parseFloat(this.toSave);
    this.user.amount = this.amountToSave;
    this.userService.addExpenditure(this.user).subscribe(
      response => {

        localStorage.setItem("identity", JSON.stringify(response.user));
      },
      error => {
        console.log(error as any);
      }
    );
    this.userService.newExpenditure(this.income).subscribe(
      response => {

        this.router.navigate(["/home"]);
      },
      error => {
        console.log(error as any);
      }
    );
  }
}
