import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers/root.reducers';
import { AppComponent } from '../../components/handlers/app/app.component';
import { HeaderComponent } from '../../components/presentation/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DemoHttpInterceptor } from '../../interceptors/httpinterceptor';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    RouterModule.forChild(routes),
    MatTableModule,
  ]
})
export class AppModule { }
