import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormPagesComponent } from './pages/form-page/form-page.component';
import { DirtyFormGuardGuard } from './guards/dirty-form-guard.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'form',
    component: FormPagesComponent,
    canDeactivate: [DirtyFormGuardGuard]
  },
];
