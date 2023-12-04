import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

class testInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler): Observable<HttpEvent<unknown>> {    
        console.log('intercepted request ... ', req);

        if (req.method === "POST") {
            const newRequest = req.clone({
                headers: new HttpHeaders({ token: "123456789" })
            });
            return next.handle(newRequest);
        };
        return next.handle(req);
    }
}