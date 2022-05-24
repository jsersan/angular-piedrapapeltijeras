import { GameService } from './game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  result: string;
  pointsUser = 0;
  pointsComp =  0;

  constructor(private playGame: GameService) {}

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    console.log(this.pointsUser);
  }

  /*
  s: tijeras
  p: papel
  r: piedra
  */

  play(choice: string): void {
    const result = this.playGame.game(choice,'','');
    
    this.result = result.message;

    console.log(this.result);

    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
  }
}
