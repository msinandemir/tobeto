import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoadingServiceService } from '../../services/loading-service.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
})
export class FormPagesComponent {
  constructor(
    private navigator: Router,
    private loadingService: LoadingServiceService
  ) {}

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('Default value', [Validators.required]),
    description: new FormControl('Default value', [Validators.required]),
  });

  get isFormDirty() {
    return this.formGroup.dirty;
  }

  onFormSubmit(): void {
    this.loadingService.setLoading(true);
    this.formGroup.markAsPristine();

    const timeout = setTimeout(() => {
      this.loadingService.setLoading(false);
    }, 3000);

    setTimeout(() => {
      clearTimeout(timeout);
      if (!this.loadingService.getLoading())
        alert('Form başarıyla gönderildi.');
      this.navigator.navigate(['/']);
    }, 3100);
  }
}
