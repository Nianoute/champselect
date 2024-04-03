import { Component } from '@angular/core';
import { ChampionDraft } from '../../assets/setup/champions';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.scss',
})
export class DraftComponent {
  gamename: string = localStorage.getItem('gamename') || '';
  bluename: string = localStorage.getItem('bluename') || '';
  redname: string = localStorage.getItem('redname') || '';

  banList: Array<ChampionDraft> = localStorage.getItem('banList')
    ? JSON.parse(localStorage.getItem('banList') || '[]')
    : [];

  listPick: Array<ChampionDraft> = localStorage.getItem('listPick')
    ? JSON.parse(localStorage.getItem('listPick') || '[]')
    : [];

  listBlueBan: Array<ChampionDraft> = localStorage.getItem('listBlueBan')
    ? JSON.parse(localStorage.getItem('listBlueBan') || '[]')
    : [];

  listRedBan: Array<ChampionDraft> = localStorage.getItem('listRedBan')
    ? JSON.parse(localStorage.getItem('listRedBan') || '[]')
    : [];

  listBluePick: Array<ChampionDraft> = localStorage.getItem('listBluePick')
    ? JSON.parse(localStorage.getItem('listBluePick') || '[]')
    : [];

  listRedPick: Array<ChampionDraft> = localStorage.getItem('listRedPick')
    ? JSON.parse(localStorage.getItem('listRedPick') || '[]')
    : [];

  orders: Array<ChampionDraft> = [];

  role: ChampionDraft = {
    id: 0,
    name: '',
    img: '',
    splash: '',
    ban: false,
    team: false,
    indexBlue: 0,
    indexRed: 0,
    roleActual: '',
  };

  initialRole: ChampionDraft = {
    id: 0,
    name: '',
    img: '',
    splash: '',
    ban: false,
    team: false,
    indexBlue: 0,
    indexRed: 0,
    roleActual: '',
  };

  changeBlueRole: boolean = true;
  changeRedRole: boolean = true;
  changeRoleActive: boolean = false;
  indexBlue: number = 0;
  indexRed: number = 0;

  ngOnInit() {
    if (
      this.gamename === '' ||
      this.bluename === '' ||
      this.redname === '' ||
      this.banList.length === 0 ||
      this.listPick.length === 0
    ) {
      window.location.href = '/game';
    } else {
      this.banList.forEach((element: ChampionDraft, index: number) => {
        if (index % 2 === 0) {
          this.listBlueBan.push(element);
        } else {
          this.listRedBan.push(element);
        }
      });
      this.listBluePick.forEach((element: ChampionDraft, index: number) => {
        element.indexBlue = index;
        if (index + 1 === 1) {
          element.roleActual = '../../assets/img/game/role/Top_icon.webp';
        } else if (index + 1 === 2) {
          element.roleActual = '../../assets/img/game/role/Jungle_icon.webp';
        } else if (index + 1 === 3) {
          element.roleActual = '../../assets/img/game/role/Middle_icon.webp';
        } else if (index + 1 === 4) {
          element.roleActual = '../../assets/img/game/role/Bottom_icon.webp';
        } else if (index + 1 === 5) {
          element.roleActual = '../../assets/img/game/role/Support_icon.webp';
        }
      });
      this.listRedPick.forEach((element: ChampionDraft, index: number) => {
        element.indexRed = index;
        if (index + 1 === 1) {
          element.roleActual = '../../assets/img/game/role/Top_icon.webp';
        } else if (index + 1 === 2) {
          element.roleActual = '../../assets/img/game/role/Jungle_icon.webp';
        } else if (index + 1 === 3) {
          element.roleActual = '../../assets/img/game/role/Middle_icon.webp';
        } else if (index + 1 === 4) {
          element.roleActual = '../../assets/img/game/role/Bottom_icon.webp';
        } else if (index + 1 === 5) {
          element.roleActual = '../../assets/img/game/role/Support_icon.webp';
        }
      });
      this.orderPickBan();
    }
  }

  async reset() {
    localStorage.clear();
    window.location.href = '/';
  }

  async changeRole(pick: ChampionDraft, team: boolean) {
    this.role = pick;
    if (team) {
      this.changeRedRole = false;
    } else {
      this.changeBlueRole = false;
    }
    this.changeRoleActive = true;
  }

  async changeRole2(pick: ChampionDraft, team: boolean) {
    if (team) {
      this.listBluePick[pick.indexBlue] = this.role;
      this.listBluePick[this.role.indexBlue] = pick;
      this.listBluePick.forEach((element: ChampionDraft, index: number) => {
        element.indexBlue = index;
        if (index + 1 === 1) {
          element.roleActual = '../../assets/img/game/role/Top_icon.webp';
        } else if (index + 1 === 2) {
          element.roleActual = '../../assets/img/game/role/Jungle_icon.webp';
        } else if (index + 1 === 3) {
          element.roleActual = '../../assets/img/game/role/Middle_icon.webp';
        } else if (index + 1 === 4) {
          element.roleActual = '../../assets/img/game/role/Bottom_icon.webp';
        } else if (index + 1 === 5) {
          element.roleActual = '../../assets/img/game/role/Support_icon.webp';
        }
      });
    } else {
      this.listRedPick[pick.indexRed] = this.role;
      this.listRedPick[this.role.indexRed] = pick;
      this.listRedPick.forEach((element: ChampionDraft, index: number) => {
        element.indexRed = index;
        if (index + 1 === 1) {
          element.roleActual = '../../assets/img/game/role/Top_icon.webp';
        } else if (index + 1 === 2) {
          element.roleActual = '../../assets/img/game/role/Jungle_icon.webp';
        } else if (index + 1 === 3) {
          element.roleActual = '../../assets/img/game/role/Middle_icon.webp';
        } else if (index + 1 === 4) {
          element.roleActual = '../../assets/img/game/role/Bottom_icon.webp';
        } else if (index + 1 === 5) {
          element.roleActual = '../../assets/img/game/role/Support_icon.webp';
        }
      });
    }
    this.changeRoleActive = false;
    this.changeRedRole = true;
    this.changeBlueRole = true;
    this.role = this.initialRole;
  }

  async changeRoleStop() {
    this.changeRoleActive = false;
    this.changeRedRole = true;
    this.changeBlueRole = true;
    this.role = this.initialRole;
  }

  async orderPickBan() {
    for (let i = 0; i < 6; i++) {
      this.orders.push(this.banList[i]);
      this.orders[i].ban = true;
      if (i % 2 === 0) {
        this.orders[i].team = true;
      } else {
        this.orders[i].team = false;
      }
    }
    for (let i = 0; i < 6; i++) {
      this.orders.push(this.listPick[i]);
      this.orders[i + 6].ban = false;
      if (i + 1 === 2 || i + 1 === 3 || i + 1 === 6) {
        this.orders[i + 6].team = false;
      } else {
        this.orders[i + 6].team = true;
      }
    }
    for (let i = 0; i < 4; i++) {
      this.orders.push(this.banList[i + 6]);
      this.orders[i + 12].ban = true;
      if (i % 2 === 0) {
        this.orders[i + 12].team = true;
      } else {
        this.orders[i + 12].team = false;
      }
    }
    for (let i = 0; i < 4; i++) {
      this.orders.push(this.listPick[i + 6]);
      this.orders[i + 16].ban = false;
      if (i + 1 === 1 || i + 1 === 4) {
        this.orders[i + 16].team = false;
      } else {
        this.orders[i + 16].team = true;
      }
    }
  }
}
