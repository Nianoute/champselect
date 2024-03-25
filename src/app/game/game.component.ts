import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  gamename: string = localStorage.getItem('gamename') || '';
  bluename: string = localStorage.getItem('bluename') || '';
  redname: string = localStorage.getItem('redname') || '';
  timer: number = 60;
  champions = [
    {
      name: 'Aatrox',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aatrox.png',
    },
    {
      name: 'Ahri',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ahri.png',
    },
    {
      name: 'Akali',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Akali.png',
    },
    {
      name: 'Alistar',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Alistar.png',
    },
    {
      name: 'Amumu',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Amumu.png',
    },
    {
      name: 'Anivia',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Anivia.png',
    },
    {
      name: 'Annie',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Annie.png',
    },
    {
      name: 'Aphelios',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aphelios.png',
    },
    {
      name: 'Ashe',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ashe.png',
    },
    {
      name: 'Aurelion Sol',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/AurelionSol.png',
    },
    {
      name: 'Azir',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Azir.png',
    },
    {
      name: 'Aatrox',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aatrox.png',
    },
    {
      name: 'Ahri',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ahri.png',
    },
    {
      name: 'Akali',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Akali.png',
    },
    {
      name: 'Alistar',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Alistar.png',
    },
    {
      name: 'Amumu',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Amumu.png',
    },
    {
      name: 'Anivia',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Anivia.png',
    },
    {
      name: 'Annie',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Annie.png',
    },
    {
      name: 'Aphelios',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aphelios.png',
    },
    {
      name: 'Ashe',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ashe.png',
    },
    {
      name: 'Aurelion Sol',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/AurelionSol.png',
    },
    {
      name: 'Azir',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Azir.png',
    },
  ];

  blue__pick1: string = 'waiting';
  blue__pick2: string = 'waiting';
  blue__pick3: string = 'waiting';
  blue__pick4: string = 'waiting';
  blue__pick5: string = 'waiting';

  red__pick1: string = 'waiting';
  red__pick2: string = 'waiting';
  red__pick3: string = 'waiting';
  red__pick4: string = 'waiting';
  red__pick5: string = 'waiting';

  ngOnInit() {
    if (this.gamename === '' || this.bluename === '' || this.redname === '') {
      window.location.href = '/';
    }
  }

  async reset() {
    localStorage.removeItem('gamename');
    localStorage.removeItem('bluename');
    localStorage.removeItem('redname');
    window.location.href = '/';
  }
}
