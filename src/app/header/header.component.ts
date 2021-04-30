import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userCounter = 0;

    clock(): string {
      const date = new Date();

      //also adding 0 infront of single digits
      const hours = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);
      const seconds = ('0' + date.getSeconds()).slice(-2);

      return `${hours}:${minutes}:${seconds}`;
    }

    constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.clock();
    }, 250)
  }
}