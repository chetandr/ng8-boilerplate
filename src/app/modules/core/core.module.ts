import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/presentation/header/header.component';
import { AppComponent } from '../../components/handlers/app/app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, AppComponent],
  imports: [
    CommonModule,
    RouterModule,
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
