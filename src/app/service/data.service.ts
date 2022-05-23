import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifs = new BehaviorSubject<any>([])

  constructor(
    private http: HttpClient
  ) { }

  getGifsData(name: string): Observable<any> {
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${environment.apikey}&q=${name}&limit=25`)
  }

  gifSingleFetch(gif_id: any){
    return this.http.get(`https://api.giphy.com/v1/gifs/${gif_id}?api_key=${environment.apikey}`)
  }
}
