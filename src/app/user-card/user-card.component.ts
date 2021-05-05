import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  // array with all users
  users: any[] = []

  // array with users that have been marked
  addedUsers: any[] = []

  // tabs option
  showAll: boolean = true;

  filterUsers: string = ''

  //if we have users data saved in localStorage - get it
  //if we don't - get it from API, place in localStorage 
  //and then place it in users array that we use to display it on screen
  manageUsersData(): void {
    if (localStorage.getItem('users') === null) {
      //subscribe to data from Observable
      this._usersService.getUsersData()
      .subscribe(data => { 
        this.users = data.results;
        localStorage.setItem('users', JSON.stringify(data.results));
    })
    } else {
    this.users = JSON.parse(localStorage.getItem('users')!);
  }
}

  manageAddedUsers(): void {
    this.addedUsers = this.users.filter(user => user.dateAdded);
    localStorage.setItem('addedUsers', JSON.stringify(this.addedUsers));
  }

  //save users array to local storage
  saveUsersLocally(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  //get new users from api - push them into array and local storage
  loadMoreData(): void {
    this._usersService.getUsersData()
    .subscribe(data => {
      this.users.push(...data.results);
      // this.saveUsersLocally();
    });
  }

  //add date on buttons click
  //if user already have date property - remove it
  addDate(user: any): void {
    if (user.dateAdded) {
      delete user.dateAdded;
    } else {
    user.dateAdded = new Date();
  }
    this.saveUsersLocally();
    this.manageAddedUsers();
  }

  constructor(private _usersService: UsersService) {
  }

  ngOnInit(): void {
    this.manageUsersData()
  }

}