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

    public Test(){
        return this.http.get(this.baseUrl + 'getRegions.php')
        .map(res => res.json());
    }

    /*getPosts(category, limit){
        return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
            .map(res => res.json());
    }*/
}