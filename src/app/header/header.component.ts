import {Component, OnInit} from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() { }

    getDate(): Date {
      const date = new Date();
      return date;
    }

    usersCounter() { 
      const addedUsers = JSON.parse(localStorage.getItem('addedUsers')!)
      if(addedUsers === null) {
        return 0;
      } else {
        return addedUsers.length;
      }
  };

  ngOnInit(): void {
    setInterval(() => {
      this.getDate();
    }, 250)
  }
}