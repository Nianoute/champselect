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

  background: string = 'url(../../assets/img/background.jpg)';
  backgroundElement: HTMLElement | null = null;
  backgrounds = [
    'url(../../assets/img/background__teemo.png)',
    'url(../../assets/img/fiddle.gif)',
    'url(https://media.giphy.com/media/2DfPsGDCCFR0VO2yhx/giphy.gif)',
    'url(https://media.giphy.com/media/ip68eDWiINMQh3qysS/giphy.gif)',
    'url(https://media.giphy.com/media/Mk8X5m74dCTJVMLoQH/giphy.gif)',
    'url(https://media.giphy.com/media/ZztwJB3iqzY1kdJrQ4/giphy.gif)',
    'url(https://media.giphy.com/media/ce7o3JR18Ryr8yGN60/giphy.gif)',
    'url(https://media.giphy.com/media/ZRR8wnQpPet9p5K5rX/giphy.gif)',
    'url(../../assets/img/background.jpg)',
  ];
  currentBackground: number = 0;

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
      localStorage.setItem('bluename', this.bluename);
      localStorage.setItem('redname', this.redname);
      localStorage.setItem('gamename', this.gamename);
    }
  }

  async reset() {
    this.gamename = '';
    this.bluename = '';
    this.redname = '';
    localStorage.removeItem('gamename');
    localStorage.removeItem('bluename');
    localStorage.removeItem('redname');
  }

  async backgroundChange() {
    this.backgroundElement =
      document.documentElement.querySelector('.background');
    if (this.backgroundElement) {
      this.backgroundElement.style.backgroundImage =
        this.backgrounds[this.currentBackground];
      this.currentBackground++;
      if (this.currentBackground === this.backgrounds.length) {
        this.currentBackground = 0;
      }
    }
  }
}
