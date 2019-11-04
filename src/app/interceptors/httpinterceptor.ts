import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class DemoHttpInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = request.clone({
            // url: this.fixUrl(request.url),
            headers: this.addExtraHeaders(request.url, request.headers),
            responseType: this.getResponseType(request.url)
        });

        return next.handle(clonedRequest);
    }
    getResponseType(url: string): "arraybuffer" | "blob" | "json" | "text" {
        return 'json';
    }
    private addExtraHeaders(url, headers: HttpHeaders) {
        headers = headers.append('Authorization', '1234');
        return headers;
    }
    private fixUrl(url: string) {
        const urlValue = url.split('/');
        urlValue[2] = environment.API_ENDPOINT;
        urlValue.splice(0, 2);
        return urlValue.join('/');
    }
}