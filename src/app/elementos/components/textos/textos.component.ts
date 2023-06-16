import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/rick-and-morty.service';

@Component({
  selector: 'app-rick-and-morty-list',
  templateUrl: '../textos/textos.component.html',
  styleUrls: ['../textos/textos.component.css']
})
export class RickAndMortyListComponent implements OnInit {
  characters: any[];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.rickAndMortyService.getCharacters().subscribe(
      (characters: any[]) => {
        this.characters = characters;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
