import { Component, OnInit } from '@angular/core';
import { Income } from '../../models/income';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent implements OnInit {
  public income: Income;
  public user: User;
  public toSave;
  public userAmount;
  public amountToSave;
  public _id;
  constructor(private userService: UserService, private router: Router) {
  this.income = new Income('', '', 0, '', '', '');
  this.user = new User("", "", "", "", 0, "");
  this.userAmount =  this.userService.getIdentity().amount;
  this._id = this.userService.getIdentity()._id;
  this.user._id = this._id;

  }

  ngOnInit() {
  }

  onSubmit(Form){
    this.amountToSave = parseFloat(this.userAmount) + parseFloat(this.toSave);
    this.user.amount = this.amountToSave;
    this.userService.addIncome(this.user).subscribe(response=> {

        localStorage.setItem('identity', JSON.stringify(response.user));
    } , error => {
      console.log(error as any);
    });
    this.userService.newIncome(this.income).subscribe(response=>{

        this.router.navigate(["/home"])
    }, error => {
        console.log(error as any);
    });


  }
}
