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
  started: boolean = localStorage.getItem('started') === 'true' ? true : false;
  picking: boolean = localStorage.getItem('picking') === 'true' ? true : false;

  actualStepBan: number = localStorage.getItem('actualStepBan')
    ? parseInt(localStorage.getItem('actualStepBan') || '1')
    : 1;
  actualStepPick: number = localStorage.getItem('actualStepPick')
    ? parseInt(localStorage.getItem('actualStepPick') || '1')
    : 1;
  bluePickStep: number = localStorage.getItem('bluePickStep')
    ? parseInt(localStorage.getItem('bluePickStep') || '1')
    : 1;
  redPickStep: number = localStorage.getItem('redPickStep')
    ? parseInt(localStorage.getItem('redPickStep') || '1')
    : 1;
  actualStep: number = localStorage.getItem('actualStep')
    ? parseInt(localStorage.getItem('actualStep') || '1')
    : 1;

  actualChampion: number = -1;
  champions = [
    {
      name: 'Aatrox',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aatrox.png',
      id: 1,
      role: 'Top',
      open: true,
    },
    {
      name: 'Ahri',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ahri.png',
      id: 2,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Akali',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Akali.png',
      id: 3,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Akshan',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Akshan.png',
      id: 4,
      role: 'ADC',
      open: true,
    },
    {
      name: 'Alistar',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Alistar.png',
      id: 5,
      role: 'Support',
      open: true,
    },
    {
      name: 'Amumu',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Amumu.png',
      id: 6,
      role: 'Jungle',
      open: true,
    },
    {
      name: 'Anivia',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Anivia.png',
      id: 7,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Annie',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Annie.png',
      id: 8,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Aphelios',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Aphelios.png',
      id: 9,
      role: 'ADC',
      open: true,
    },
    {
      name: 'Ashe',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ashe.png',
      id: 10,
      role: 'ADC',
      open: true,
    },
    {
      name: 'Aurelion Sol',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/AurelionSol.png',
      id: 11,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Azir',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Azir.png',
      id: 12,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Bard',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Bard.png',
      id: 13,
      role: 'Support',
      open: true,
    },
    {
      name: "Bel'veth",
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Belveth.png',
      id: 14,
      role: 'Jungle',
      open: true,
    },
    {
      name: 'Blitzcrank',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Blitzcrank.png',
      id: 15,
      role: 'Support',
      open: true,
    },
    {
      name: 'Brand',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Brand.png',
      id: 16,
      role: 'Support',
      open: true,
    },
    {
      name: 'Braum',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Braum.png',
      id: 17,
      role: 'Support',
      open: true,
    },
    {
      name: 'Caitlyn',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Caitlyn.png',
      id: 18,
      role: 'ADC',
      open: true,
    },
    {
      name: 'Camille',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Camille.png',
      id: 19,
      role: 'Top',
      open: true,
    },
    {
      name: 'Cassiopeia',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Cassiopeia.png',
      id: 20,
      role: 'Mid',
      open: true,
    },
    {
      name: "Cho'Gath",
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Chogath.png',
      id: 21,
      role: 'Top',
      open: true,
    },
    {
      name: 'Corki',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Corki.png',
      id: 22,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Darius',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Darius.png',
      id: 23,
      role: 'Top',
      open: true,
    },
    {
      name: 'Diana',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Diana.png',
      id: 24,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Dr. Mundo',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/DrMundo.png',
      id: 25,
      role: 'Top',
      open: true,
    },
    {
      name: 'Draven',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Draven.png',
      id: 26,
      role: 'ADC',
      open: true,
    },
    {
      name: 'Ekko',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ekko.png',
      id: 27,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Elise',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Elise.png',
      id: 28,
      role: 'Jungle',
      open: true,
    },
    {
      name: 'Evelynn',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Evelynn.png',
      id: 29,
      role: 'Jungle',
      open: true,
    },
    {
      name: 'Ezreal',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ezreal.png',
      id: 30,
      role: 'ADC',
      open: true,
    },
    {
      name: 'Fiddlesticks',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Fiddlesticks.png',
      id: 31,
      role: 'Support',
      open: true,
    },
    {
      name: 'Fiora',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Fiora.png',
      id: 32,
      role: 'Top',
      open: true,
    },
    {
      name: 'Fizz',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Fizz.png',
      id: 33,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Galio',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Galio.png',
      id: 34,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Gangplank',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Gangplank.png',
      id: 35,
      role: 'Top',
      open: true,
    },
    {
      name: 'Garen',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Garen.png',
      id: 36,
      role: 'Top',
      open: true,
    },
    {
      name: 'Gnar',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Gnar.png',
      id: 37,
      role: 'Top',
      open: true,
    },
    {
      name: 'Gragas',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Gragas.png',
      id: 38,
      role: 'Jungle',
      open: true,
    },
    {
      name: 'Graves',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Graves.png',
      id: 39,
      role: 'Jungle',
      open: true,
    },
    {
      name: 'Gwen',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Gwen.png',
      id: 40,
      role: 'Top',
      open: true,
    },
    {
      name: 'Hecarim',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Hecarim.png',
      id: 41,
      role: 'Jungle',
      open: true,
    },
    {
      name: 'Heimerdinger',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Heimerdinger.png',
      id: 42,
      role: 'Mid',
      open: true,
    },
    {
      name: 'Illaoi',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Illaoi.png',
      id: 43,
      role: 'Top',
      open: true,
    },
    {
      name: 'Irelia',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Irelia.png',
      id: 44,
      role: 'Top',
      open: true,
    },
    {
      name: 'Ivern',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Ivern.png',
      id: 45,
      role: 'Jungle',
      open: true,
    },
    {
      name: 'Janna',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Janna.png',
      id: 46,
      role: 'Support',
      open: true,
    },
    {
      name: 'Jarvan IV',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/JarvanIV.png',
      id: 47,
      role: 'Jungle',
      open: true,
    },
    {
      name: 'Jax',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Jax.png',
      id: 48,
      role: 'Top',
      open: true,
    },
    {
      name: 'Jayce',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Jayce.png',
      id: 49,
      role: 'Top',
      open: true,
    },
    {
      name: 'Jhin',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Jhin.png',
      id: 50,
      role: 'ADC',
      open: true,
    },
    {
      name: 'Jinx',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Jinx.png',
      id: 51,
      role: 'ADC',
      open: true,
    },
    {
      name: "Kai'Sa",
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Kaisa.png',
      id: 52,
      role: 'ADC',
      open: true,
    },
    {
      name: 'Kalista',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Kalista.png',
      id: 53,
      role: 'ADC',
      open: true,
    },
    {
      name: 'Karma',
      img: 'https://ddragon.leagueoflegends.com/cdn/11.16.1/img/champion/Karma.png',
      id: 54,
      role: 'Support',
      open: true,
    },
  ];

  banList: any = localStorage.getItem('banList')
    ? JSON.parse(localStorage.getItem('banList') || '[]')
    : [];

  ListPick: any = localStorage.getItem('listPick')
    ? JSON.parse(localStorage.getItem('listPick') || '[]')
    : [];

  listBluePick: any = localStorage.getItem('listBluePick')
    ? JSON.parse(localStorage.getItem('listBluePick') || '[]')
    : [
        {
          pick1: 'waiting',
          pick2: 'waiting',
          pick3: 'waiting',
          pick4: 'waiting',
          pick5: 'waiting',
        },
      ];

  listRedPick: any = localStorage.getItem('listRedPick')
    ? JSON.parse(localStorage.getItem('listRedPick') || '[]')
    : [
        {
          pick1: 'waiting',
          pick2: 'waiting',
          pick3: 'waiting',
          pick4: 'waiting',
          pick5: 'waiting',
        },
      ];

  ngOnInit() {
    if (this.gamename === '' || this.bluename === '' || this.redname === '') {
      window.location.href = '/';
    } else {
      if (this.started) {
        if (this.picking === true) {
          if (
            this.actualStepPick === 2 ||
            this.actualStepPick === 3 ||
            this.actualStepPick === 6 ||
            this.actualStepPick === 7 ||
            this.actualStepPick === 10
          ) {
            document
              .querySelector('.red')
              ?.querySelectorAll('.pick')
              [this.redPickStep - 1]?.classList.add('actualPick');
          } else {
            document
              .querySelector('.blue')
              ?.querySelectorAll('.pick')
              [this.bluePickStep - 1]?.classList.add('actualPick');
          }
        } else {
          if (this.actualStepBan % 2 !== 0) {
            document.querySelector('.pick1')?.classList.add('actualBan');
          } else {
            document
              .querySelector('.red')
              ?.querySelector('.pick1')
              ?.classList.add('actualBan');
          }
        }

        if (localStorage.getItem('listPick')) {
          this.ListPick.forEach((pick: any, index: number) => {
            if (index < 10) {
              this.champions[pick.id - 1].open = false;
              this.setPickChampion(pick.id - 1, index + 1);
            }
          });
        }

        if (localStorage.getItem('banList')) {
          this.banList.forEach((ban: any, index: number) => {
            if (index < 10) {
              this.champions[ban.id - 1].open = false;
              this.setBanChampion(ban.id - 1, index + 1);
            }
          });
        }
      }
    }
  }

  async reset() {
    localStorage.clear();
    window.location.href = '/';
  }

  async startTimer() {
    const interval = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }

  async actualChamp(championId: number) {
    this.actualChampion = championId - 1;
    console.log(this.actualChampion);
    document.querySelector('.locked')?.classList.remove('locked');
    document
      .querySelectorAll('.champ')
      [this.actualChampion]?.querySelector('img')
      ?.classList.add('locked');
  }

  async startGame() {
    this.started = true;
    localStorage.setItem('started', 'true');
    document.querySelector('.pick1')?.classList.add('actualBan');
  }

  async banChampion() {
    this.setChampLockOff(this.actualChampion);
    this.setBanChampion(this.actualChampion, this.actualStepBan);
    this.actualStep++;
    this.actualStepBan++;
    if (this.actualStepBan === 7 || this.actualStepBan === 11) {
      console.log('picking');
      console.log(this.actualStepBan);
      this.picking = true;
      if (this.actualStepPick % 2 !== 0) {
        document.querySelector('.actualBan')?.classList.remove('actualBan');
        document
          .querySelector('.blue')
          ?.querySelectorAll('.pick')
          [this.bluePickStep - 1]?.classList.add('actualPick');
      } else {
        document.querySelector('.actualBan')?.classList.remove('actualBan');
        document
          .querySelector('.red')
          ?.querySelectorAll('.pick')
          [this.redPickStep - 1]?.classList.add('actualPick');
      }
    } else {
      if (this.actualStepBan % 2 !== 0) {
        document.querySelector('.pick1')?.classList.add('actualBan');
        document
          .querySelector('.red')
          ?.querySelector('.pick1')
          ?.classList.remove('actualBan');
      } else {
        document.querySelector('.pick1')?.classList.remove('actualBan');
        document
          .querySelector('.red')
          ?.querySelector('.pick1')
          ?.classList.add('actualBan');
      }
    }
    localStorage.setItem('actualStepBan', this.actualStepBan.toString());
    localStorage.setItem('actualStep', this.actualStep.toString());
    localStorage.setItem('picking', this.picking.toString());
    this.actualChampion = -1;
  }

  async setBanChampion(actualChampion: number, actualStepBan: number) {
    if (actualStepBan % 2 !== 0) {
      if (actualStepBan === 1) {
        document
          .querySelector('.blue__ban')
          ?.querySelector('.ban1')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      } else if (actualStepBan === 3) {
        document
          .querySelector('.blue__ban')
          ?.querySelector('.ban2')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      } else if (actualStepBan === 5) {
        document
          .querySelector('.blue__ban')
          ?.querySelector('.ban3')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      } else if (actualStepBan === 7) {
        document
          .querySelector('.blue__ban')
          ?.querySelector('.ban4')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      } else if (actualStepBan === 9) {
        document
          .querySelector('.blue__ban')
          ?.querySelector('.ban5')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      }
    } else {
      if (actualStepBan === 2) {
        document
          .querySelector('.red__ban')
          ?.querySelector('.ban1')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      } else if (actualStepBan === 4) {
        document
          .querySelector('.red__ban')
          ?.querySelector('.ban2')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      } else if (actualStepBan === 6) {
        document
          .querySelector('.red__ban')
          ?.querySelector('.ban3')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      } else if (actualStepBan === 8) {
        document
          .querySelector('.red__ban')
          ?.querySelector('.ban4')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      } else if (actualStepBan === 10) {
        document
          .querySelector('.red__ban')
          ?.querySelector('.ban5')
          ?.querySelector('img')
          ?.setAttribute('src', this.champions[actualChampion].img);
      }
    }
  }

  async pickChampion() {
    this.setChampLockIn(this.actualChampion);
    this.setPickChampion(this.actualChampion, this.actualStepPick);
    if (
      this.actualStepPick === 2 ||
      this.actualStepPick === 3 ||
      this.actualStepPick === 6 ||
      this.actualStepPick === 7 ||
      this.actualStepPick === 10
    ) {
      this.redPickStep++;
      localStorage.setItem('listRedPick', JSON.stringify(this.listRedPick));
      localStorage.setItem('redPickStep', this.redPickStep.toString());
    } else {
      this.bluePickStep++;
      localStorage.setItem('listBluePick', JSON.stringify(this.listBluePick));
      localStorage.setItem('bluePickStep', this.bluePickStep.toString());
    }
    this.actualStep++;
    this.actualStepPick++;
    if (this.actualStepPick === 7 || this.actualStepPick === 11) {
      this.picking = false;
      document.querySelector('.actualPick')?.classList.remove('actualPick');
    }
    if (
      this.actualStepPick === 2 ||
      this.actualStepPick === 3 ||
      this.actualStepPick === 6 ||
      this.actualStepPick === 7 ||
      this.actualStepPick === 10
    ) {
      document.querySelector('.actualPick')?.classList.remove('actualPick');
      document
        .querySelector('.red')
        ?.querySelectorAll('.pick')
        [this.redPickStep - 1]?.classList.add('actualPick');
    } else {
      document.querySelector('.actualPick')?.classList.remove('actualPick');
      document
        .querySelector('.blue')
        ?.querySelectorAll('.pick')
        [this.bluePickStep - 1]?.classList.add('actualPick');
    }
    this.actualChampion = -1;
    localStorage.setItem('actualStep', this.actualStep.toString());
    localStorage.setItem('actualStepPick', this.actualStepPick.toString());
    localStorage.setItem('picking', this.picking.toString());
  }

  async setPickChampion(actualChampion: number, actualStepPick: number) {
    if (actualStepPick === 1) {
      document
        .querySelector('.blue')
        ?.querySelector('.pick1')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listBluePick[0].pick1 = this.champions[actualChampion].name;
    } else if (actualStepPick === 2) {
      document
        .querySelector('.red')
        ?.querySelector('.pick1')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listRedPick[0].pick1 = this.champions[actualChampion].name;
    } else if (actualStepPick === 3) {
      document
        .querySelector('.red')
        ?.querySelector('.pick2')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listRedPick[0].pick2 = this.champions[actualChampion].name;
    } else if (actualStepPick === 4) {
      document
        .querySelector('.blue')
        ?.querySelector('.pick2')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listBluePick[0].pick2 = this.champions[actualChampion].name;
    } else if (actualStepPick === 5) {
      document
        .querySelector('.blue')
        ?.querySelector('.pick3')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listBluePick[0].pick3 = this.champions[actualChampion].name;
    } else if (actualStepPick === 6) {
      document
        .querySelector('.red')
        ?.querySelector('.pick3')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listRedPick[0].pick3 = this.champions[actualChampion].name;
    } else if (actualStepPick === 7) {
      document
        .querySelector('.red')
        ?.querySelector('.pick4')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listRedPick[0].pick4 = this.champions[actualChampion].name;
    } else if (actualStepPick === 8) {
      document
        .querySelector('.blue')
        ?.querySelector('.pick4')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listBluePick[0].pick4 = this.champions[actualChampion].name;
    } else if (actualStepPick === 9) {
      document
        .querySelector('.blue')
        ?.querySelector('.pick5')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listBluePick[0].pick5 = this.champions[actualChampion].name;
    } else if (actualStepPick === 10) {
      document
        .querySelector('.red')
        ?.querySelector('.pick5')
        ?.querySelector('img')
        ?.setAttribute('src', this.champions[actualChampion].img);
      this.listRedPick[0].pick5 = this.champions[actualChampion].name;
    }
  }

  async setChampLockOff(actualChampion: number) {
    document.querySelector('.locked')?.classList.remove('locked');
    this.champions[actualChampion].open = false;
    this.banList.push(this.champions[actualChampion]);
    localStorage.setItem('banList', JSON.stringify(this.banList));
  }

  async setChampLockIn(actualChampion: number) {
    document.querySelector('.locked')?.classList.remove('locked');
    this.champions[actualChampion].open = false;
    this.ListPick.push(this.champions[actualChampion]);
    localStorage.setItem('listPick', JSON.stringify(this.ListPick));
  }
}
