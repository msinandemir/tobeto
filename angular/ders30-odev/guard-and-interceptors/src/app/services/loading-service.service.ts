import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingServiceService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  setLoading(isLoading: boolean) {
    this.loadingSubject.next(isLoading);
  }

  getLoading(): boolean {
    return this.loadingSubject.getValue();
  }
}
