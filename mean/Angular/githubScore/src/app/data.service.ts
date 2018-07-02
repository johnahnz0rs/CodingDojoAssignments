import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    // data: BehaviorSubject<any> = new BehaviorSubject<any>(String);
    constructor(private _http: HttpClient) { }

    getScore(url) {
        return this._http.get(url);
    }

}