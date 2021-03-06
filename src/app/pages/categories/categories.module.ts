import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';


import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    TableModule,
    PaginatorModule,
    SharedModule
  ]
})
export class CategoriesModule { }
