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

@NgModule({
  declarations: [
    VideosComponent,
    BannerComponent,
    CategoriesComponent
  ],
  exports: [
    VideosComponent
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
