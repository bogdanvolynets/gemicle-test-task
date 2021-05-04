import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  users: any[] = []

  addedUsers: any[] = []

  //if we have users data saved in localStorage - get it
  //if we don't - get it from API, place in localStorage 
  //and then place it in users array that we use to display it on screen
  manageUsersData() {
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

  //get new users from api - push them into array and local storage
  loadMoreData(): void {
    this._usersService.getUsersData()
    .subscribe(data => {
      this.users.push(...data.results)
      localStorage.setItem('users', JSON.stringify(this.users))
    });
  }

  storeAddedUser(user: any) {
    if (user.dateAdded) {
      delete user.dateAdded;
    } else {
    user.dateAdded = new Date();
  }
    // this.addedUsers.push(user);
    // localStorage.setItem('addedUser', JSON.stringify(user));
    console.log(this.addedUsers);
  }

  constructor(private _usersService: UsersService) {
  }

  ngOnInit(): void {
    this.manageUsersData()
  }

}