import { Breadcrumb } from './../../node_modules/xng-breadcrumb/lib/types/breadcrumb.d';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {Breadcrumb: 'Home'}},
  {path: 'error', component: TestErrorComponent, data: {Breadcrumb: 'Errors'}},
  {path: 'server-error', component: ServerErrorComponent, data: {Breadcrumb: 'Server Error'}},
  {path: 'not-found', component: NotFoundComponent, data: {Breadcrumb: 'Not Found'}},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule), data: {Breadcrumb: 'Shop'}},
  {path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule), data: {Breadcrumb: 'Basket'}},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
