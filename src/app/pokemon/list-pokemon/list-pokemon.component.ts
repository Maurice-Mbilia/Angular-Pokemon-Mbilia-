import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html'
  //styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] | undefined;

  constructor(private router: Router, private pokemonService: PokemonService          
    ) {}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }  

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemond', pokemon.id]); 
  }
}
