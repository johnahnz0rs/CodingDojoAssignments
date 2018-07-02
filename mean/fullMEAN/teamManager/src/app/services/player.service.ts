import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  // private base = 'http://5b315dff7ad3350014b433d7.mockapi.io/players';
  private base = '/api/players';


  constructor(
    private http: HttpClient
  ) { }

  addOnePlayer(data): Observable<any> {
    console.log('***** playerService running addOnePlayer(data) *****');
    console.log(data);
    return this.http.post<any>(this.base, data);
  }

  getAllPlayers(): Observable<any> {
    console.log('***** playerService running getAllPlayers() *****');
    return this.http.get<any>(this.base);
  }

  getOnePlayer(id): Observable<any> {
    console.log('***** playerService running getOnePlayer(' + id + ') *****');
    return this.http.get<any>(`${this.base}/${id}`);
  }

  updateOnePlayer(player): Observable<any> {
    console.log('***** playerService running updateOnePlayer(' + player._id + ') with the following data ******');
    console.log(player);
    return this.http.put<any>(`${this.base}/${player._id}`, player);
  }

  deletePlayer(id): Observable<any> {
    console.log('***** playerService running deletePlayer(' + id + ') *****');
    return this.http.delete<any>(`${this.base}/${id}`);
  }


  loadInitialData(data): Observable<any> {
    console.log('***** playerService loading initial data bc db is empty *****');
    console.log(data);
    console.log(typeof data);
    return this.http.post<any>(`${this.base}/initial`, data);
  }

}
