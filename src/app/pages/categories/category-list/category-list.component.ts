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

  categories1: Category[] = [];
  categories2: Category[] = [];
  categories3: Category[] = [];
  
  rows = 5;

  ngOnInit() {

    this.buscar1(1);
    this.buscar2(1);
    this.buscar3(1);

  }

  buscar1(page) {

    console.log("pagina1", page);

    this.categoryService.getAll().subscribe(categories => {

      this.categories1 = categories.filter((category => {
        return (category.id >= ((this.rows*(page-1))+1) && category.id <= (page*this.rows))
      }))

    });

  }

  buscar2(page) {

    console.log("pagina2", page);

    this.categoryService.getCategories().then(categories => {

      this.categories2 = categories.filter((category => {
        return (category.id >= ((this.rows*(page-1))+1) && category.id <= (page*this.rows))
      }))

    });

  }

  buscar3(page) {

    console.log("pagina3", page);

    this.categoryService.getCategories().then(categories => {

      this.categories3 = categories.filter((category => {
        return (category.id >= ((this.rows*(page-1))+1) && category.id <= (page*this.rows))
      }))

    });

  }

}
