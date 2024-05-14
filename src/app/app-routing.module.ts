import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'auth',
    loadChildren : ()=> import('mfAuthe/AutheModule').then((m) => m.AutheModule)
  },
  {
    path:'productos',
    loadChildren:()=> import('mfShop/ProductsModule').then((m) => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
