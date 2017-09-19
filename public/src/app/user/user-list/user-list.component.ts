import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users;
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  destroy(user: User){
    const response = confirm('delete?')
    if(response) {
      this.destroyUserEvent.emit(user);      
    }
  }

  update(user: User) {
    this.updateUserEvent.emit(user);
  }
}
