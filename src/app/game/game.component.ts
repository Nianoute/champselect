import { Component } from '@angular/core';
import { championsList } from '../../assets/setup/champions';
import { filterChampByRole } from '../../assets/setup/champions';
import { filterChampByName } from '../../assets/setup/champions';
import { Champion } from '../../assets/setup/champions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  gamename: string = localStorage.getItem('gamename') || '';
  bluename: string = localStorage.getItem('bluename') || '';
  redname: string = localStorage.getItem('redname') || '';
  started: boolean = localStorage.getItem('started') === 'true' ? true : false;
  picking: boolean = localStorage.getItem('picking') === 'true' ? true : false;
  timeout: ReturnType<typeof setTimeout> | undefined;

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

  actualChampion: Champion = {
    name: '',
    img: '',
    splash: '',
    id: 0,
    role: ['Top'],
    open: true,
    hide: false,
    actualPick: false,
    actualBan: false,
  };

  initialChampion: Champion = {
    name: '',
    img: '',
    splash: '',
    id: 0,
    role: ['Top'],
    open: true,
    hide: false,
    actualPick: false,
    actualBan: false,
  };

  champions = championsList;
  banList: Array<Champion> = localStorage.getItem('banList')
    ? JSON.parse(localStorage.getItem('banList') || '[]')
    : [];

  ListPick: Array<Champion> = localStorage.getItem('listPick')
    ? JSON.parse(localStorage.getItem('listPick') || '[]')
    : [];

  listBluePick: Array<Champion> = localStorage.getItem('listBluePick')
    ? JSON.parse(localStorage.getItem('listBluePick') || '[]')
    : [
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Top_icon.webp',
          actualPick: false,
        },
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Jungle_icon.webp',
          actualPick: false,
        },
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Middle_icon.webp',
          actualPick: false,
        },
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Bottom_icon.webp',
          actualPick: false,
        },
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Support_icon.webp',
          actualPick: false,
        },
      ];

  listBlueBan: Array<Champion> = localStorage.getItem('listBlueBan')
    ? JSON.parse(localStorage.getItem('listBlueBan') || '[]')
    : [
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
      ];

  listRedPick: Array<Champion> = localStorage.getItem('listRedPick')
    ? JSON.parse(localStorage.getItem('listRedPick') || '[]')
    : [
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Top_icon.webp',
          actualPick: false,
        },
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Jungle_icon.webp',
          actualPick: false,
        },
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Middle_icon.webp',
          actualPick: false,
        },
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Bottom_icon.webp',
          actualPick: false,
        },
        {
          name: 'waiting',
          img: '../../assets/img/game/role/Support_icon.webp',
          actualPick: false,
        },
      ];

  listRedBan: Array<Champion> = localStorage.getItem('listRedBan')
    ? JSON.parse(localStorage.getItem('listRedBan') || '[]')
    : [
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
        {
          img: '../../assets/img/game/ban.png',
          actualBan: false,
        },
      ];

  ngOnInit() {
    if (this.gamename === '' || this.bluename === '' || this.redname === '') {
      window.location.href = '/';
    } else if (this.actualStepPick === 11) {
      window.location.href = '/draft';
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
            this.listRedPick[this.redPickStep - 1].actualPick = true;
          } else {
            this.listBluePick[this.bluePickStep - 1].actualPick = true;
          }
        } else {
          if (this.actualStepBan % 2 !== 0) {
            let step = this.actualStepBan / 2 - 0.5;
            this.listBlueBan[step].actualBan = true;
          } else {
            let step = this.actualStepBan / 2 - 1;
            this.listRedBan[step].actualBan = true;
          }
        }

        if (localStorage.getItem('listPick')) {
          this.ListPick.forEach((pick: Champion, index: number) => {
            if (index < 10) {
              this.champions[pick.id - 1].open = false;
            }
          });
        }

        if (localStorage.getItem('banList')) {
          this.banList.forEach((ban: Champion, index: number) => {
            if (index < 10) {
              this.champions[ban.id - 1].open = false;
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

  async startGame() {
    this.started = true;
    localStorage.setItem('started', 'true');
    this.listBlueBan[0].actualBan = true;
  }

  async actualChamp(champion: Champion) {
    if (!this.picking) {
      if (this.actualStepBan % 2 !== 0) {
        let step = this.actualStepBan / 2 - 0.5;
        this.listBlueBan[step].img = champion.img;
      } else {
        let step = this.actualStepBan / 2 - 1;
        this.listRedBan[step].img = champion.img;
      }
    } else {
      if (
        this.actualStepPick === 2 ||
        this.actualStepPick === 3 ||
        this.actualStepPick === 6 ||
        this.actualStepPick === 7 ||
        this.actualStepPick === 10
      ) {
        this.listRedPick[this.redPickStep - 1].img = champion.img;
      } else {
        this.listBluePick[this.bluePickStep - 1].img = champion.img;
      }
    }
    this.actualChampion = champion;
  }

  async banChampion() {
    this.setChampLockOff(this.actualChampion.id - 1);
    this.actualStep++;
    this.actualStepBan++;
    if (this.actualStepBan === 7 || this.actualStepBan === 11) {
      this.picking = true;
      if (this.actualStepPick === 1) {
        this.listBluePick[0].actualPick = true;
      } else {
        this.listRedPick[3].actualPick = true;
      }
    } else {
      if (this.actualStepBan % 2 !== 0) {
        let step = this.actualStepBan / 2 - 0.5;
        this.listBlueBan[step].actualBan = true;
      } else {
        let step = this.actualStepBan / 2 - 1;
        this.listRedBan[step].actualBan = true;
      }
    }
    localStorage.setItem('actualStepBan', this.actualStepBan.toString());
    localStorage.setItem('actualStep', this.actualStep.toString());
    localStorage.setItem('picking', this.picking.toString());
    this.actualChampion = this.initialChampion;
  }

  async pickChampion() {
    this.setChampLockIn(this.actualChampion.id - 1);
    this.actualStep++;
    this.actualStepPick++;
    if (
      this.actualStepPick === 2 ||
      this.actualStepPick === 3 ||
      this.actualStepPick === 6 ||
      this.actualStepPick === 7 ||
      this.actualStepPick === 10
    ) {
      if (this.actualStepPick !== 7) {
        this.listRedPick[this.redPickStep - 1].actualPick = true;
      }
    } else {
      if (this.actualStepPick !== 11) {
        this.listBluePick[this.bluePickStep - 1].actualPick = true;
      }
    }
    if (this.actualStepPick === 7 || this.actualStepPick === 11) {
      this.picking = false;
      if (this.actualStepPick === 7) {
        this.listBlueBan[3].actualBan = true;
      }
    }
    this.actualChampion = this.initialChampion;
    localStorage.setItem('actualStep', this.actualStep.toString());
    localStorage.setItem('actualStepPick', this.actualStepPick.toString());
    localStorage.setItem('picking', this.picking.toString());

    if (this.actualStepPick === 11) {
      window.location.href = '/draft';
    }
  }

  async setChampLockOff(actualChampion: number) {
    this.champions[actualChampion].open = false;
    this.banList.push(this.champions[actualChampion]);
    localStorage.setItem('banList', JSON.stringify(this.banList));
    if (this.actualStepBan % 2 !== 0) {
      this.listBlueBan[this.actualStepBan / 2 - 0.5] =
        this.champions[actualChampion];
      localStorage.setItem('listBlueBan', JSON.stringify(this.listBlueBan));
    } else {
      this.listRedBan[this.actualStepBan / 2 - 1] =
        this.champions[actualChampion];
      localStorage.setItem('listRedBan', JSON.stringify(this.listRedBan));
    }
  }

  async setChampLockIn(actualChampion: number) {
    this.champions[actualChampion].open = false;
    this.ListPick.push(this.champions[actualChampion]);
    localStorage.setItem('listPick', JSON.stringify(this.ListPick));
    if (
      this.actualStepPick === 2 ||
      this.actualStepPick === 3 ||
      this.actualStepPick === 6 ||
      this.actualStepPick === 7 ||
      this.actualStepPick === 10
    ) {
      this.listRedPick[this.redPickStep - 1] = this.champions[actualChampion];
      this.redPickStep++;
      localStorage.setItem('listRedPick', JSON.stringify(this.listRedPick));
      localStorage.setItem('redPickStep', this.redPickStep.toString());
    } else {
      this.listBluePick[this.bluePickStep - 1] = this.champions[actualChampion];
      this.bluePickStep++;
      localStorage.setItem('listBluePick', JSON.stringify(this.listBluePick));
      localStorage.setItem('bluePickStep', this.bluePickStep.toString());
    }
  }

  async filterChampByRole(role: string) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      return filterChampByRole(role);
    }, 100);
  }

  async filterChampByName(event: Event | undefined) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      let value = (event?.target as HTMLInputElement).value;
      return filterChampByName(value);
    }, 500);
  }
}
