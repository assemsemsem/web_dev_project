import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { Category } from '../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.css']
})
export class VerticalNavComponent implements OnInit {
  categories: Category[] = []

  constructor(public categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    
    this.categoryService.getCategories()
    .subscribe(categories => 
      this.categories = categories
    );
  }

}