import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import RouteComponent from '../../components/route/route.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/app.module').then((m) => m.AppModule)
  }
];

@NgModule({
  declarations: [RouteComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [RouteComponent]
})
export default class AppRoutingModule {}
