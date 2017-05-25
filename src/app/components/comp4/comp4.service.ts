import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class Comp4Service {

   constructor(private _http:Http){
        console.log('Task Service Initiated...')
    }

    getElecHOur(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://FKHADER01:3111/api/hour')
              .map(res=> res.json())
              

    }

    getElecDays(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.get('http://FKHADER01:3111/api/days')
              .map(res=> res.json())
              

    }

}

