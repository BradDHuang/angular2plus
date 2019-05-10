import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    
    storeServers(servers: any[]) {
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.post('https://ng-http-aaee8.firebaseio.com/data.json', 
        //     servers,
        //     {headers});
        return this.http.put('https://ng-http-aaee8.firebaseio.com/data.json', 
            servers,
            {headers});
    }
    
    getServers() {
        return this.http.get('https://ng-http-aaee8.firebaseio.com/data')
            .pipe(map(
                (res: Response) => {
                    const data = res.json();
                    for (const server of data) {
                        server.name = 'Fetched_' + server.name;
                    }
                    return data;
                }
            ))
            .pipe(catchError(
                (err: Response) => {
                    // console.log(err);
                    return throwError('Something went wrong.');
                }
            ));
    }
}
