import { Component } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrl: './draft.component.scss',
})
export class DraftComponent {
  gamename: string = localStorage.getItem('gamename') || '';
  bluename: string = localStorage.getItem('bluename') || '';
  redname: string = localStorage.getItem('redname') || '';

  banList: any = localStorage.getItem('banList')
    ? JSON.parse(localStorage.getItem('banList') || '[]')
    : [];

  listPick: any = localStorage.getItem('listPick')
    ? JSON.parse(localStorage.getItem('listPick') || '[]')
    : [];

  listBlueBan: any = localStorage.getItem('listBlueBan')
    ? JSON.parse(localStorage.getItem('listBlueBan') || '[]')
    : [];

  listRedBan: any = localStorage.getItem('listRedBan')
    ? JSON.parse(localStorage.getItem('listRedBan') || '[]')
    : [];

  listBluePick: any = localStorage.getItem('listBluePick')
    ? JSON.parse(localStorage.getItem('listBluePick') || '[]')
    : [];

  listRedPick: any = localStorage.getItem('listRedPick')
    ? JSON.parse(localStorage.getItem('listRedPick') || '[]')
    : [];

  orders: any = [];

  role: any = {};
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
      this.banList.forEach((element: Array<string>, index: number) => {
        if (index % 2 === 0) {
          this.listBlueBan.push(element);
        } else {
          this.listRedBan.push(element);
        }
      });
      this.listBluePick.forEach((element: any, index: number) => {
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
      this.listRedPick.forEach((element: any, index: number) => {
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

  async changeRole(pick: any, team: boolean) {
    this.role = pick;
    if (team) {
      this.changeRedRole = false;
    } else {
      this.changeBlueRole = false;
    }
    this.changeRoleActive = true;
  }

  async changeRole2(pick: any, team: boolean) {
    if (team) {
      this.listBluePick[pick.indexBlue] = this.role;
      this.listBluePick[this.role.indexBlue] = pick;
      this.listBluePick.forEach((element: any, index: number) => {
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
      this.listRedPick.forEach((element: any, index: number) => {
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
    this.role = {};
  }

  async changeRoleStop() {
    this.changeRoleActive = false;
    this.changeRedRole = true;
    this.changeBlueRole = true;
    this.role = {};
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
