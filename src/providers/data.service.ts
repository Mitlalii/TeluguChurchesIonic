
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppConfig } from '../config/app.config';
import { tap, catchError } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DataService {

    baseUrl: string = '';
    constructor(private http: HttpClient) {
        this.baseUrl = AppConfig.serviceBase_Url.apiBaseUrl;
    }

    GetAll(url: string): Observable<any> {
        return this.http.get<any>(this.baseUrl+url)
            .pipe(
                tap(data => { console.log(this.baseUrl + url + ' successful') }),
                catchError(this.handleError(this.baseUrl + url, []))
            );
    }

    Get(url: string, id: number): Observable<any> {

        return this.http.get<any>(this.baseUrl+url+ '/' + id)
            .pipe(
                tap(data => { console.log(this.baseUrl + url + ' successful') }),
                catchError(this.handleError(this.baseUrl + url, []))
            );
    }

    Post(url: string, req: any): Observable<any> {
    debugger;
        return this.http.post<any>(this.baseUrl+url, req, httpOptions)
            .pipe(
                tap(data => { console.log(this.baseUrl + url + ' successful') }),
                catchError(this.handleError(this.baseUrl + url, []))
            );
    }

    Put(url: string, req: any): Observable<any> {
        return this.http.put(this.baseUrl+url, req, httpOptions)
            .pipe(
                tap(data => { console.log(this.baseUrl + url + ' successful') }),
                catchError(this.handleError(this.baseUrl + url, []))
            );
    }

    Delete(url: string, id: number): Observable<any> {
        return this.http.delete<any>(this.baseUrl+url+ '/' + id)
            .pipe(
                tap(data => { console.log(this.baseUrl + url + ' successful') }),
                catchError(this.handleError(this.baseUrl + url, []))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(error as T);
        };
    }
}
