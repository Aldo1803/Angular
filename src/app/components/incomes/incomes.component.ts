import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { Income } from '../../models/income';

@Component({
  selector: 'app-incomes',
  templateUrl: './incomes.component.html',
  styleUrls: ['./incomes.component.css']
})
export class IncomesComponent implements OnInit {

  public id;
  public incomes: Array<Income>;
  constructor(private userService: UserService) {

    this.id = this.userService.getIdentity()._id;
  }

  ngOnInit() {
    this.userService.getIncomes(this.id).subscribe(
      response => {
        this.incomes = response.income;

      },
      error => {
        console.log(error as any);
      }
    );
  }
}
