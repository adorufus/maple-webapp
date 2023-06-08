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
import { LoginBaseComponent } from './core/auth/login/components/base/login-base.component';
import { SignupVerifComponent } from './core/auth/signup-verif/signup-verif.component';
import {CoreModule} from "./core/core.module";
import {HomeModule} from "./core/home/home.module";
import {LayoutsModule} from "./layouts/layouts.module";
import { NotfoundComponent } from './shared/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FeatherModule.pick(allIcons),
    NgbModule,
    BrowserAnimationsModule,
    CoreModule,
    LayoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
