import { createEffect, ofType, Actions } from '@ngrx/effects';
import * as UserActions from '../actions/user.actions';
import { Injectable } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

  loadUserListEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUserList.type),
      switchMap(() =>
        this.globalservice.getUserList().pipe(
          map((users) => UserActions.loadUserListSuccessful({ users }))
        )
      )
    )
  );
  
  constructor(
    private actions$: Actions,
    private globalservice: AppService,
    private router: Router
) { }
}