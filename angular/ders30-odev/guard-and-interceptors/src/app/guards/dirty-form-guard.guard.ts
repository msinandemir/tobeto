import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FormPagesComponent } from '../pages/form-page/form-page.component';

export const DirtyFormGuardGuard: CanDeactivateFn<FormPagesComponent> = (
  component: FormPagesComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {

  if (component.isFormDirty) {
    return confirm('Emin misiniz? Değişiklikler kaydedilmemiş olabilir.');
  }

  return true;
};
