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
import {PageTitleComponent} from "../shared/page-title/page-title.component";
import {VideosPageComponent} from "./videos/videos-page.component";
import {RunningTextComponent} from "../shared/running-text/running-text.component";
import { SeeVideosComponent } from './auth/see-videos/see-videos.component';
import { LatestComponent } from './auth/see-videos/components/latest/latest.component';
import { BannerVideosComponent } from './auth/see-videos/components/banner-videos/banner-videos.component';
import { RunPurpleComponent } from './auth/shared/run-purple/run-purple.component';
import { DaftarVideoComponent } from './auth/see-videos/components/latest/component/daftar-video/daftar-video.component';
import { PlayVideoComponent } from './auth/play-video/play-video.component';
import { BannerPlayComponent } from './auth/play-video/components/banner-play/banner-play.component';
import { ReadArticlesComponent } from './auth/read-articles/read-articles.component';
import { RunCyanComponent } from './auth/shared/run-cyan/run-cyan.component';
import { RunWanderComponent } from './auth/shared/run-wander/run-wander.component';
import { RunTrickComponent } from './auth/shared/run-trick/run-trick.component';
import { RunUnsceneComponent } from './auth/shared/run-unscene/run-unscene.component';
import { RunDixiComponent } from './auth/shared/run-dixi/run-dixi.component';
import { RunPlayComponent } from './auth/shared/run-play/run-play.component';
import { Detailproduk3Component } from './components/deptstore/detail/components/detailproduk3/detailproduk3.component';
import { TextRewindComponent } from './auth/shared/text-rewind/text-rewind.component';
import { TextCanComponent } from './auth/shared/text-can/text-can.component';
import { DetailActivationComponent } from './auth/activation/detail-activation/detail-activation.component';
import { RunCanComponent } from './auth/shared/run-can/run-can.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TextUnsceneComponent } from './auth/shared/text-unscene/text-unscene.component';
import { TextWanderComponent } from './auth/shared/text-wander/text-wander.component';
import { TextTrickComponent } from './auth/shared/text-trick/text-trick.component';
import { TextDixiComponent } from './auth/shared/text-dixi/text-dixi.component';
import { SmallArticlesComponent } from './auth/read-articles/components/small-articles/small-articles.component';

@NgModule({
  declarations: [
    VideosPageComponent,
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
    GamesListComponent,
    PageTitleComponent,
    RunningTextComponent,
    SeeVideosComponent,
    LatestComponent,
    BannerVideosComponent,
    RunPurpleComponent,
    DaftarVideoComponent,
    PlayVideoComponent,
    BannerPlayComponent,
    ReadArticlesComponent,
    RunCyanComponent,
    RunWanderComponent,
    RunTrickComponent,
    RunUnsceneComponent,
    RunDixiComponent,
    RunPlayComponent,
    Detailproduk3Component,
    TextRewindComponent,
    TextCanComponent,
    DetailActivationComponent,
    RunCanComponent,
    TextUnsceneComponent,
    TextWanderComponent,
    TextTrickComponent,
    TextDixiComponent,
    SmallArticlesComponent,
 
    
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
    YouTubePlayerModule
  ],
  providers: [CategoriesComponent]
})
export class CoreModule { }
