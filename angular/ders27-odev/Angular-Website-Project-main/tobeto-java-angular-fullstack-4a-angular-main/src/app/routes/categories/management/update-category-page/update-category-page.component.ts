import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../features/categories/services/categories.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryListItem } from '../../../../features/categories/models/category-list-item';
import { UpdateCategoryFormComponent } from '../../../../features/categories/components/update-category-form/update-category-form.component';
import { BasicLayoutComponent } from '../../../../shared/components/basic-layout/basic-layout.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-update-category-page',
  standalone: true,
  imports: [
    CommonModule,UpdateCategoryFormComponent,SharedModule
  ],
  templateUrl: './update-category-page.component.html',
  styleUrl: './update-category-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UpdateCategoryPageComponent{

}

