import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZmZmODhiOTBkOWFkMzAwZmYzMjgyZWFkYjBhN2QzMCIsInN1YiI6IjYyOTViODg5ZjhlOTgyMDA5YWNjMjI4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U5FhImEu6xb2V0rpAG4FeatusNYHBYveAkaQUXZ7Eq0';

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${this._token}`}
    })
    return next.handle(request);
  }
}
