import {Observable, throwError} from 'rxjs';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import Swal from 'sweetalert2';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    Swal.fire({
      title: 'Loading',
      allowEscapeKey: false,
      allowOutsideClick: false,
      onOpen: () => Swal.showLoading()
    });

    const customReq = request.clone({

    });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const html = error.error.filds ? error.error.filds.map(e => '<br>' + e).join(',') : '';

        Swal.fire({
          title: error.error.errrorCode,
          html: `${error.error.message} <small>${html}</small>`,
          type: 'warning',
          confirmButtonText: 'Ok'
        });
        /*this.snackBar.open(error.error.message, error.error.errrorCode, {
          duration: 10000, verticalPosition: 'top', horizontalPosition: 'right'
        });*/
        return throwError(error);
      })
    );
  }
}
