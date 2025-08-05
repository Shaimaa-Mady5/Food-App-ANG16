import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthModule } from './core/auth/auth.module';
import { DashboaredModule } from './dashboared/dashboared.module';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboaredModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
