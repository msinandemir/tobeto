import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, input } from '@angular/core';
import { CategoryListItem } from '../../models/category-list-item';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-update-category-form',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  templateUrl: './update-category-form.component.html',
  styleUrl: './update-category-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateCategoryFormComponent implements OnInit {



  id!:string | null;
  category!:CategoryListItem;
  formGroup: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private categoryService: CategoriesService, private route:ActivatedRoute, private navigator:Router){}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id !== null){
      this.getCategoryById(this.id)   
    }
  }
  getCategoryById(categoryId:string){
    this.categoryService.getById(Number(categoryId)).subscribe
 ({next:(item)=>this.category=item,
  complete:()=>{this.formGroup.setValue({name:this.category.name,description:this.category.description})}
 });
  }

  onFormSubmit() {
    const updatedCategory:CategoryListItem = {id:this.category.id,description:this.formGroup.value.description,name:this.formGroup.value.name}
    this.categoryService.updateById(this.category.id,updatedCategory).subscribe
    ({complete:()=>{this.navigator.navigate(['/'])}})
    } 


    onDelete(){
      if(confirm("Do you want to delete it?"))
        {
          this.categoryService.deleteById(this.category.id).subscribe
          ({complete:()=>{this.navigator.navigate(['/'])}})
        }
    }
}
