import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { Expenditure } from '../../models/expenditure';
@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.component.html',
  styleUrls: ['./expenditures.component.css']
})
export class ExpendituresComponent implements OnInit {
  public user: User;
  public id;
  public expenditures: Array<Expenditure>;
  constructor(private userService: UserService) {
    this.user = new User("", "", "", "", 0, "", 0);
    this.id = this.userService.getIdentity()._id;

  }

  ngOnInit() {
    this.userService.getExpenditures(this.id).subscribe(response => {

        this.expenditures = response.income;

    }, error => {
      console.log(error as any);
    });
  }

}
