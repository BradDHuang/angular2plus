import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

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
        return this.http.get('https://ng-http-aaee8.firebaseio.com/data.json');
    }
}
