import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/Services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games:any[]=[]
  constructor(private _GamesService:GamesService){}
  ngOnInit(): void {
    this._GamesService.getgames().subscribe({
      next:(response)=>{
        console.log(response);
        for (let i = 0; i < 3; i++) {
          this.games[i]=response[i];
          console.log(response[0])
        }
      }
    })
  }


}
