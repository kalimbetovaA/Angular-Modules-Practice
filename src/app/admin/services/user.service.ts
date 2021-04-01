import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList = [
    {
      id: 1,
      name: 'Mark',
      groupId: 1
    },
    {
      id: 2,
      name: 'Din',
      groupId: 1
    },
    {
      id: 3,
      name: 'Anna',
      groupId: 2
    },
    {
      id: 4,
      name: 'Kim',
      groupId: 2
    },
    {
      id: 5,
      name: 'Bob',
      groupId: 3
    },
    {
      id: 6,
      name: 'Sam',
      groupId: 3
    }
  ];

  constructor() { }

  getUsers(): any {
    return this.userList;
  }

}
