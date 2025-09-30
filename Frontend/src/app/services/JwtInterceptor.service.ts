import { HttpInterceptorFn } from '@angular/common/http';

export const jwtInterceptorFn: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  console.log("Interceptor called. Token:", token);

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
