import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { VideosComponent } from './videos/videos.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {FeatherModule} from "angular-feather";
import { ScrollerMenuTitleComponent } from './components/scroller-menu-title/scroller-menu-title.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { NewsHomeComponent } from './components/news-home/news-home.component';

@NgModule({
  declarations: [
    VideosComponent,
    BannerComponent,
    CategoriesComponent,
    ScrollerMenuTitleComponent,
    VideoListComponent,
    NewsHomeComponent,
  ],
    exports: [
        VideosComponent,
        NewsHomeComponent
    ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    FeatherModule,
  ]
})
export class CoreModule { }
