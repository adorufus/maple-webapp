import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DeptstoreComponent } from './core/components/deptstore/deptstore.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: "home", component: HomeComponent,
      },{
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
