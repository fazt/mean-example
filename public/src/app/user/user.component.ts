import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [
    // new User(1, 'jose', 'alcatara', 'jose@gmail.com'),
    // new User(2, 'jose', 'alcatara', 'jose@gmail.com'),
    // new User(3, 'jose', 'alcatara', 'jose@gmail.com')
  ];

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers()
      .then(users => this.users = users)
      .catch(err => console.log(err));
  }

  create(user: User){
    this._userService.create(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

  destroy(user: User) {
    this._userService.detroy(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
  }

  update(user: User) {
    this._userService.update(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
  }
}
