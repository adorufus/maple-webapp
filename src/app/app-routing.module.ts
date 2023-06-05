import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DeptstoreComponent } from './core/components/deptstore/deptstore.component';
import { AppComponent } from './app.component';
import {BaseComponent} from "./layouts/base/base.component";
import {LoginComponent} from "./core/auth/login/login.component";
import {NotfoundComponent} from "./shared/notfound/notfound.component";
import {ArticlesComponent} from "./core/articles/articles.component";
import {VideosPageComponent} from "./core/videos/videos-page.component";

const routes: Routes = [
  {
    path: 'auth',
    component: LoginComponent
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
        path: "videos", component: VideosPageComponent,
      },
      {
        path: "articles", component: ArticlesComponent
      },
      {
        path: "store", component: DeptstoreComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
