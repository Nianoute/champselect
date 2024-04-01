import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  intervalId: number | undefined = 0;
  gamename: string = localStorage.getItem('gamename') || '';
  bluename: string = localStorage.getItem('bluename') || '';
  redname: string = localStorage.getItem('redname') || '';
  error: boolean = false;
  errorGame: boolean = false;
  errorBlue: boolean = false;
  errorRed: boolean = false;

  background: string = '../../assets/img/background.jpg';
  backgroundElement: HTMLElement | null = null;
  backgrounds = [
    '../../assets/img/background__teemo.png',
    '../../assets/img/fiddle.gif',
    'https://media.giphy.com/media/2DfPsGDCCFR0VO2yhx/giphy.gif',
    'https://media.giphy.com/media/ip68eDWiINMQh3qysS/giphy.gif',
    'https://media.giphy.com/media/Mk8X5m74dCTJVMLoQH/giphy.gif',
    'https://media.giphy.com/media/ZztwJB3iqzY1kdJrQ4/giphy.gif',
    'https://media.giphy.com/media/ce7o3JR18Ryr8yGN60/giphy.gif',
    'https://media.giphy.com/media/ZRR8wnQpPet9p5K5rX/giphy.gif',
    '../../assets/img/background.jpg',
  ];
  currentBackground: number = 0;

  async createGame() {
    this.error = false;

    if (this.bluename === '') {
      this.error = true;
      this.errorBlue = true;
    } else {
      this.errorBlue = false;
    }

    if (this.redname === '') {
      this.error = true;
      this.errorRed = true;
    } else {
      this.errorRed = false;
    }

    if (this.gamename === '') {
      this.error = true;
      this.errorGame = true;
    } else {
      this.errorGame = false;
    }

    if (!this.error) {
      localStorage.clear();
      localStorage.setItem('bluename', this.bluename);
      localStorage.setItem('redname', this.redname);
      localStorage.setItem('gamename', this.gamename);
      window.location.href = '/game';
    }
  }

  async reset() {
    this.gamename = '';
    this.bluename = '';
    this.redname = '';
    localStorage.clear();
  }

  async backgroundChange() {
    this.background = this.backgrounds[this.currentBackground];
    this.currentBackground++;
    if (this.currentBackground >= this.backgrounds.length) {
      this.currentBackground = 0;
    }
  }
}
