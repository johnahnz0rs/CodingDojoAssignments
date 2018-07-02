import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor() { }
    activities = [];
    buildings = [
        {building: 'Farm', text: 'Earns 2-5 gold'},
        {building: 'Cave', text: 'Earns 5-10 gold'},
        {building: 'Casino', text: 'Earn up to or Lose up to 100 gold'},
        {building: 'House', text: 'Earns 7-15 gold'}
    ];

}
