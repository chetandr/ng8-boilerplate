import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './containers/user/user.component';
import { UserChildComponent } from './components/user/user.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import * as fromUser from './store';

@NgModule({
  declarations: [UserComponent, UserChildComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', fromUser.reducers),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
