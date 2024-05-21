import { Routes } from '@angular/router';
import { NewCategoryPageComponent } from './management/new-category-page/new-category-page.component';
import { UpdateCategoryPageComponent } from './management/update-category-page/update-category-page.component';

export const categoriesRoutes: Routes = [
  {
    path: 'categories/management/new',
    component: NewCategoryPageComponent,
  },
  {
    path: 'categories/management/update/:id',
    component: UpdateCategoryPageComponent
  }
  
];
