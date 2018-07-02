import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SumService {
    alphaNums: number[] = [];
    betaNums: number[] = [];
    constructor() { }
    retrieveAlphas(): number[] {
        return this.alphaNums;
    }
    retrieveBetas(): number[] {
        return this.betaNums;
    }
}
