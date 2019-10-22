import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store/reducers/root.reducers';
import { AppComponent } from './core/containers/app/app.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { AppService } from './shared/services/app.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DemoHttpInterceptor } from './shared/interceptors/httpinterceptor';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    /**
  * StoreModule.forRoot is imported once in the root module, accepting a reducer
  * function or object map of reducer functions. If passed an object of
  * reducers, combineReducers will be run creating your application
  * meta-reducer. This returns all providers for an @ngrx/store
  * based application.
  */
    StoreModule.forRoot(reducers, { metaReducers }),
    // StoreModule.forRoot({}),
    /**
     * @ngrx/router-store keeps router state up-to-date in the store.
     */
    // StoreRouterConnectingModule,
    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     */
    EffectsModule.forRoot([]),
    CoreModule.forRoot()
  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: DemoHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
