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

  listBluePick: any = [];
  listBlueBan: any = [];
  listRedPick: any = [];
  listRedBan: any = [];

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
      this.listPick.forEach((element: any, index: number) => {
        if (
          index + 1 === 2 ||
          index + 1 === 3 ||
          index + 1 === 6 ||
          index + 1 === 7 ||
          index + 1 === 10
        ) {
          this.listRedPick.push(element);
        } else {
          this.listBluePick.push(element);
        }
      });
    }
  }
}
