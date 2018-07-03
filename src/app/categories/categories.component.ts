import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$;
  routerLink = '/baby';

  constructor(private cat:CategoriesService) {
    this.categories$ = cat.categories$;
   }

  ngOnInit() {
  }

}
