import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class AppService {

    constructor(private httpClient: HttpClient) {}

    getUserList() {
        return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
    }
}