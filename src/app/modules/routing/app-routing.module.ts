import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import RouteComponent from '../../components/handlers/route/route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../request/request.module').then((m) => m.AppModule)
  }
];

@NgModule({
  declarations: [RouteComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule],
  bootstrap: [RouteComponent]
})
export default class AppRoutingModule {}
