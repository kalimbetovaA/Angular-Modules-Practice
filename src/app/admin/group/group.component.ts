import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  groups: any;

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groups = this.groupService.getGroups();
  }

}

