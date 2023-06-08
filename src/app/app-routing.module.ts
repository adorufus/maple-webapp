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
        path: 'activation',
        component: ActivationComponent
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
