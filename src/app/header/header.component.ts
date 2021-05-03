import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    userCounter = 0;

    getDate(): Date {
      const date = new Date();
      return date;
    }

    constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.getDate();
    }, 250)
  }
}