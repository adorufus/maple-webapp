import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseComponent} from "./base/base.component";
import {RouterModule} from "@angular/router";
import {NavbarComponent} from "../shared/components/navbar/navbar.component";
import {FeatherModule} from "angular-feather";
import {allIcons} from "angular-feather/icons";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [BaseComponent, NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FeatherModule.pick(allIcons)
  ]
})
export class LayoutsModule { }
