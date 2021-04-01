import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  groupList = [
    {
      id: 1,
      name: 'Developers'
    },
    {
      id: 2,
      name: 'Analytics'
    },
    {
      id: 3,
      name: 'Managers'
    }
  ];

  constructor() { }

  getGroups(): any {
    return this.groupList;
  }

  getGroup(id: number): any {
    return this.groupList.find(x => x.id === id);
  }

}
