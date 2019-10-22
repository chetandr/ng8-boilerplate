import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './containers/app/app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, AppComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    // StoreModule.forFeature('layout', fromLayout.reducers),
    // EffectsModule.forFeature([LayoutEffects])
  ]
})
export class CoreModule { 
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }
}
