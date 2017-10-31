import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class TransarcService{
    http:any;
    baseUrl: String;

    constructor(http:Http){
        this.http = http;
        this.baseUrl = 'http://localhost/transarcserver/api/';
    }

    public getRegions(){
        return this.http.get(this.baseUrl + 'getRegions.php')
        .map(res => res.json());
    }
}