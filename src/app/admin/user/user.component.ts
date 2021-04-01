import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../services/group.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private userService: UserService, private groupService: GroupService) { }

  getGroup(id: number): any {
    return this.groupService.getGroup(id);
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
