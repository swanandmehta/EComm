import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseModule } from 'src/showcase/showcase.module';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "product/:id",
    pathMatch: "full",
    loadChildren: () => import("src/product/product.module").then(module => module.ProductModule)
  },
  {
    path: "showcase/:showcase",
    pathMatch: "full",
    loadChildren: () => ShowcaseModule
  },
  {
    path: "showcase/:showcase/tag/:tag",
    pathMatch: "full",
    loadChildren: () => ShowcaseModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
