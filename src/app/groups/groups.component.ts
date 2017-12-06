import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Group } from './group';
import { GroupsService } from './groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GroupsComponent implements OnInit {
  groups: Group[];

  constructor(private groupsService: GroupsService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.groupsService.getGroups()
      .subscribe(groups => this.groups = groups);
  }

}
