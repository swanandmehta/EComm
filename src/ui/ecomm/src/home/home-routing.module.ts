import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: "product",
    pathMatch: "prefix",
    loadChildren: () => import("src/product/product.module").then(module => module.ProductModule)
  },
  {
    path: "showcase",
    pathMatch: "prefix",
    loadChildren: () => import("src/showcase/showcase.module").then(module => module.ShowcaseModule)
  },
  {
    path: "login",
    pathMatch: "full",
    loadChildren: () => import("src/login/login.module").then(module => module.LoginModule)
  },
  {
    path: "create-account",
    pathMatch: "full",
    loadChildren: () => import("src/register/register.module").then(module => module.RegisterModule)
  },
  {
    path: "recover",
    pathMatch: "full",
    loadChildren: () => import("src/recover/recover.module").then(module => module.RecoverModule)
  },
  {
    path: "journal",
    pathMatch: "prefix",
    loadChildren: () => import("src/journal/journal.module").then(module => module.JournalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
