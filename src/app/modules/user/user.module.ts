import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user.component';
import { ListComponent } from '../../components/presentation/list/list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import * as fromUser from './store';

@NgModule({
  declarations: [UserComponent, ListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('user', fromUser.reducers),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
