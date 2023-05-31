import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {FeatherModule} from "angular-feather";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {allIcons} from "angular-feather/icons";
import { LoginComponent } from './core/auth/login/login.component';
import { SignupHpComponent } from './core/auth/signup-hp/signup-hp.component';
import { BaseComponent } from './core/auth/login/components/base/base.component';
import { SignupVerifComponent } from './core/auth/signup-verif/signup-verif.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupHpComponent,
    BaseComponent,
    SignupVerifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
