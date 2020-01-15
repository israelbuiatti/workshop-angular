import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'categories', loadChildren: './pages/categories/categories.module#CategoriesModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
