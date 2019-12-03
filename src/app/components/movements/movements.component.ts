import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-movements",
  templateUrl: "./movements.component.html",
  styleUrls: ["./movements.component.css"]
})
export class MovementsComponent implements OnInit {
  public expenditure;

  constructor() {
    this.expenditure = true;
  }

  ngOnInit() {}
  onClick() {
    this.expenditure = false;
    let audio = new Audio("../../../assets/Bell Ring Sound effect.mp3");
    audio.play();
  }
  onClick2() {
    this.expenditure = true;
    let audio = new Audio("../../../assets/Nintendo Switch Snap click sound effect.mp3");
    audio.play();
  }
}
