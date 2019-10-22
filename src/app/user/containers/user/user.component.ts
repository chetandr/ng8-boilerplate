import { Component, OnInit } from '@angular/core';
import * as fromUser from '../../store';
import * as userActions from '../../store/actions/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userList: any;

  constructor(private store: Store<fromUser.State>) { 
    this.store.subscribe((state) => {
      this.userList = state.user.user.userList;
    })
  }

  ngOnInit() {
    this.store.dispatch(userActions.loadUserList());
  }

}
