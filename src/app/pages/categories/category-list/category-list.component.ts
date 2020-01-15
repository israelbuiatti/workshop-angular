import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories: Category[] = [];

  ngOnInit() {

    // this.categories.push(new Category(1, 'Categoria1', 'Descrição Categoria1'));
    // this.categories.push(new Category(1, 'Categoria2', 'Descrição Categoria2'));
    // this.categories.push(new Category(1, 'Categoria3', 'Descrição Categoria3'));

    this.categoryService.getCategories().
      then(categories => this.categories = categories);


  }

}
