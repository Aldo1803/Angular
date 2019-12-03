import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public user: User;
  public welcome;
  constructor(private userService: UserService) {


   }

  ngOnInit() {

    this.user = this.userService.getIdentity();

    this.welcome = "Welcome " + this.user.name;
    var msg = new SpeechSynthesisUtterance(this.welcome);
    window.speechSynthesis.speak(msg);
  }

}
