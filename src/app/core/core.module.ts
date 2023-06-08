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
import { ProdukComponent } from './components/deptstore/components/produk/produk.component';
import { DeptstoreComponent } from './components/deptstore/deptstore.component';
import { PromoComponent } from './components/deptstore/components/promo/promo.component';
import { DetailComponent } from './components/deptstore/detail/detail.component';
import { ComponentsComponent } from './components/deptstore/detail/components/components.component';
import { Detailproduk1Component } from './components/deptstore/detail/components/detailproduk1/detailproduk1.component';
import { ActivationComponent } from './auth/activation/activation.component';
import { NewquizzesComponent } from './auth/activation/components/newquizzes/newquizzes.component';
import { QuizzesListComponent } from './auth/activation/components/quizzes-list/quizzes-list.component';
import { GamesListComponent } from './auth/activation/components/games-list/games-list.component';


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
    ArticlesComponent,
    ProdukComponent,
    DeptstoreComponent,
    PromoComponent,
    DetailComponent,
    Detailproduk1Component,
    ActivationComponent,
    NewquizzesComponent,
    QuizzesListComponent,
    GamesListComponent
  ],
  exports: [
    NewsHomeComponent,
    VideosComponent,
    ProdukComponent
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
