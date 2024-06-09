import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingServiceService } from '../services/loading-service.service';
import { finalize } from 'rxjs';

export const loadingInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method === 'GET') return next(req);

  const loadingService = new LoadingServiceService();
  loadingService.setLoading(true);

  return next(req).pipe(
    finalize(() => {
      loadingService.setLoading(false);
    })
  );
};
