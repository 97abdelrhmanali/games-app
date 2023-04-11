import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient:HttpClient , _Router:Router) { }

  getgames():Observable<any>{
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{
      headers: {'X-RapidAPI-Key':
      'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'}
    })
  }
}
