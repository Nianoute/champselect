import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  gamename: string = localStorage.getItem('gamename') || '';
  bluename: string = localStorage.getItem('bluename') || '';
  redname: string = localStorage.getItem('redname') || '';
  error: boolean = false;

  async createGame() {
    this.error = false;

    if (this.bluename === '') {
      this.error = true;
      console.log('Please enter blue team name');
    }

    if (this.redname === '') {
      this.error = true;
      console.log('Please enter red team name');
    }

    if (!this.error) {
      console.log('Game name:', this.gamename);
      console.log('Blue team:', this.bluename);
      console.log('Red team:', this.redname);
      localStorage.setItem('bluename', this.bluename);
      localStorage.setItem('redname', this.redname);
      localStorage.setItem('gamename', this.gamename);
    }
  }
}
