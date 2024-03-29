import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DeptstoreComponent } from './core/components/deptstore/deptstore.component';
import { AppComponent } from './app.component';
import {BaseComponent} from "./layouts/base/base.component";
import {LoginComponent} from "./core/auth/login/login.component";
import {NotfoundComponent} from "./shared/notfound/notfound.component";
import {ArticlesComponent} from "./core/articles/articles.component";
import { DetailComponent } from './core/components/deptstore/detail/detail.component';
import { ActivationComponent } from './core/auth/activation/activation.component';
import {VideosPageComponent} from "./core/videos/videos-page.component";
import { SeeVideosComponent } from './core/auth/see-videos/see-videos.component';
import { LatestComponent } from './core/auth/see-videos/components/latest/latest.component';
import { PlayVideoComponent } from './core/auth/play-video/play-video.component';
import { ReadArticlesComponent } from './core/auth/read-articles/read-articles.component';
import { Detailproduk2Component } from './core/components/deptstore/detail/components/detailproduk2/detailproduk2.component';
import { Detailproduk3Component } from './core/components/deptstore/detail/components/detailproduk3/detailproduk3.component';
import { DetailActivationComponent } from './core/auth/activation/detail-activation/detail-activation.component';
import { HomeCompanyComponent } from './core/auth/home-company/home-company.component';
import { CollaborationComponent } from './core/auth/home-company/components/collaboration/collaboration.component';
import { ContactComponent } from './core/contact/contact.component';
import { UserComponent } from './shared/components/user/user.component';
import { ColabComponent } from './core/colab/colab.component';
import { SegmentPageComponent } from './core/segment-page/segment-page.component';

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent,
    data: {
      title: "auth"
    }
  },

  // {
  //   path: 'kesasar',
  //   component: NotfoundComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: '/kesasar'
  // },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: "home", component: HomeComponent,
      },
      {
        path: "segment", component: SegmentPageComponent
      },
      {
        path: "videos", component: VideosPageComponent,
      },
      {
        path: "articles", component: ArticlesComponent
      },
      {
        path: "store", component: DeptstoreComponent,
      },
      {
        path: 'detail',
        component: DetailComponent
      },
      {
        path: 'detailproduk2',
        component: Detailproduk2Component
      },
      {
        path: 'detailproduk3',
        component: Detailproduk3Component
      },
      {
        path: 'activation',
        component: ActivationComponent
      },
      {
        path: 'collaboration',
        component: ColabComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'media',
        component: LatestComponent
      },
      {
        path: 'play-video',
        component: PlayVideoComponent
      },
      {
        path: 'read-articles',
        component: ReadArticlesComponent
      },
      {
        path: 'article',
        component: ArticlesComponent
      },
      {
        path: 'detail-activation',
        component: DetailActivationComponent
      },
      {
        path: 'company',
        component: HomeCompanyComponent
      },
      {
        path: 'user',
        component: UserComponent
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'disabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
