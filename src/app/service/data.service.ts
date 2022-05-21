import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifs = new BehaviorSubject<any>([])

  constructor(
    private http: HttpClient
  ) { }

  getGifsData(name: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${environment.apikey}&q=${name}&limit=25`)
    .subscribe((response: any)=>{
      console.log(response);
      this.gifs.next(response.data)
    })
  }

  searchGifs(){
    return this.gifs.asObservable();
  }

  gifSingleFetch(gif_id: any){
    return this.http.get(`https://api.giphy.com/v1/gifs/${gif_id}?api_key=${environment.apikey}`)
  }
}
