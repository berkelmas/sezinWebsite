import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./home-page/home-page.component";
// Import your library
import { SlickCarouselModule } from "ngx-slick-carousel";
import { LightboxModule } from "ngx-lightbox";

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    LightboxModule,
  ],
})
export class HomeModule {}
