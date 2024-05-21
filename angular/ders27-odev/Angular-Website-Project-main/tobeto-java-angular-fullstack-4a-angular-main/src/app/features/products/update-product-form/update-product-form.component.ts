import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductListItem } from '../models/product-list-item';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product-form',
  standalone: true,
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  templateUrl: './update-product-form.component.html',
  styleUrl: './update-product-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateProductFormComponent implements OnInit {
  id!:string | null;
  product!:ProductListItem;


  constructor(private productService: ProductsService, private route:ActivatedRoute, private navigator:Router){}

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    supplierId: new FormControl(0, [Validators.required]),
    categoryId: new FormControl(0, [Validators.required]),
    quantityPerUnit: new FormControl(0, [Validators.required]),
    unitPrice: new FormControl(0, [Validators.required]),
    unitsInStock: new FormControl(0, [Validators.required]),
    unitsOnOrder: new FormControl(0, [Validators.required]),
    recorderLevel: new FormControl(0, [Validators.required]),
    discontinued: new FormControl(true, [Validators.required]),
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id !== null){
      this.getProductById(this.id)  
      console.log(this.product) 
    }
    console.log(this.id)
  }
  getProductById(productId:string){
    this.productService.getById(Number(productId)).subscribe
    ({next:(item)=>this.product=item,
     complete:()=>{this.formGroup.setValue(
      {name:this.product.name,supplierId:this.product.supplierId,categoryId:this.product.categoryId,quantityPerUnit:this.product.quantityPerUnit,unitPrice:this.product.unitPrice,unitsInStock:this.product.unitsInStock,unitsOnOrder:this.product.unitsOnOrder,recorderLevel:this.product.reorderLevel,discontinued:this.product.discontinued})}
  })


 }
 onFormSubmit(){
  const updatedProduct:ProductListItem = this.formGroup.value
    this.productService.updateProductById(this.product.id,updatedProduct).
    subscribe
    ({complete:()=>{this.navigator.navigate(['/'])}})
    } 
 }

