import { Component, OnInit, Input } from '@angular/core';
import { loadUserList } from '../../store/actions/user.actions';

@Component({
  selector: 'app-child-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserChildComponent implements OnInit {

  @Input() userList;

  constructor() { }

  ngOnInit() {
  }

}
