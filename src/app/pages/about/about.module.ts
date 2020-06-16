import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutRoutingModule } from "./about-routing.module";
import { AboutPageComponent } from "./about-page/about-page.component";
import { BgysPolicyPageComponent } from './bgys-policy-page/bgys-policy-page.component';

@NgModule({
  declarations: [AboutPageComponent, BgysPolicyPageComponent],
  imports: [CommonModule, AboutRoutingModule]
})
export class AboutModule {}
