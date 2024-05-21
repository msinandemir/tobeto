import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UpdateProductFormComponent } from '../../../features/products/update-product-form/update-product-form.component';

@Component({
  selector: 'app-update-product-page',
  standalone: true,
  imports: [
    CommonModule,SharedModule,UpdateProductFormComponent
  ],
  templateUrl: './update-product-page.component.html',
  styleUrl: './update-product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateProductPageComponent { }
