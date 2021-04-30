import { Component, OnInit } from '@angular/core';
import { users } from "../users";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  users = users;

  constructor() { }

  ngOnInit(): void {
  }

}
