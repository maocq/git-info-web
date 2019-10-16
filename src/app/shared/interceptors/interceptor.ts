import {Observable, throwError} from 'rxjs';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const customReq = request.clone({

    });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.snackBar.open(error.error.message, error.error.errrorCode, {
          duration: 10000, verticalPosition: 'top', horizontalPosition: 'right'
        });
        return throwError(error);
      })
    );
  }
}
