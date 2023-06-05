import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "../app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { VideosComponent } from './home/components/videos/videos.component';
import { BannerComponent } from './home/components/banner/banner.component';
import { CategoriesComponent } from './home/components/categories/categories.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {FeatherModule} from "angular-feather";
import { ScrollerMenuTitleComponent } from './home/components/scroller-menu-title/scroller-menu-title.component';
import { VideoListComponent } from './home/components/video-list/video-list.component';
import { NewsHomeComponent } from './home/components/news-home/news-home.component';
import { HomeComponent } from './home/home.component';
import {SignupHpComponent} from "./auth/signup-hp/signup-hp.component";
import {LoginComponent} from "./auth/login/login.component";
import {LoginBaseComponent} from "./auth/login/components/base/login-base.component";
import {SignupVerifComponent} from "./auth/signup-verif/signup-verif.component";
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    VideosComponent,
    BannerComponent,
    CategoriesComponent,
    ScrollerMenuTitleComponent,
    VideoListComponent,
    NewsHomeComponent,
    SignupHpComponent,
    SignupVerifComponent,
    LoginComponent,
    LoginBaseComponent,
    ArticlesComponent
  ],
  exports: [
    NewsHomeComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    FeatherModule,
  ]
})
export class CoreModule { }
