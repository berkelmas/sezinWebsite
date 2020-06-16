import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutPageComponent } from "./about-page/about-page.component";
import { BgysPolicyPageComponent } from "./bgys-policy-page/bgys-policy-page.component";

const routes: Routes = [
  {
    path: "",
    component: AboutPageComponent,
  },
  {
    path: "bgys-policy",
    component: BgysPolicyPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
