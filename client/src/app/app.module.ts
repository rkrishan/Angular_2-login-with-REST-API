import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [RootComponent]
})

export class AppModule { }
