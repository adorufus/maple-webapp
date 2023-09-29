import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {FeatherModule} from "angular-feather";
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
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
import { RunningTextComponent } from './shared/running-text/running-text.component';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AuthService} from "./services/auth.service";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserComponent } from './shared/components/user/user.component';
import  {AngularFireAnalyticsModule} from "@angular/fire/compat/analytics";


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
    LayoutsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    NgbDropdownModule,
    MatSlideToggleModule,
    NgxPaginationModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
