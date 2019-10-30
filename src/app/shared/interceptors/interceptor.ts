import {Observable, throwError} from 'rxjs';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    Swal.fire({
      allowEscapeKey: false,
      allowOutsideClick: false,
      customClass: { container: 'sweet-not-background' },
      onOpen: () => Swal.showLoading()
    });

    const customReq = request.clone({
    });

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) { Swal.close(); }
      }),
      catchError((error: HttpErrorResponse) => {
        const html = error.error.filds ? error.error.filds.map(e => '<br>' + e).join(',') : '';

        Swal.fire({
          title: error.error.errrorCode,
          html: `${error.error.message} <small>${html}</small>`,
          type: 'warning',
          confirmButtonText: 'Ok'
        });

        return throwError(error);
      })
    );
  }
}
