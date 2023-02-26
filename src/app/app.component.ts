import { Component} from '@angular/core';
//import { POKEMONS } from './mock-pokemon-list';
//import { Pokemon } from './pokemon';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  //styleUrls: ['./app.component.css']
})

export class AppComponent {}

/** 
export class AppComponent implements OnInit {
  //pokemonList = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  pokemonList: Pokemon[] = POKEMONS; 
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
    console.table(this.pokemonList); 
    //this.selectPokemon(this.pokemonList[0]); 
  }

  selectPokemon(pokemonId: string) {   //selectPokemon(pokemon: Pokemon) on a changé le contrat d'interface
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);  // .value renvoie une string, pour caster en number on rajoute +
    
    if(pokemon) {
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {

      console.log(`Vous avez demandé un pokémon fantome sur mon pote Pokemon.`);
      this.pokemonSelected = pokemon;
    }  
  }
}
**/