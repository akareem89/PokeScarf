import gen7Data from "../res/gen7/gen7.json";

export class PokemonTeam {
  name: string;
  pokemonList: Pokemon[];
  static allTeams: PokemonTeam[]
  constructor(teamName: string, allPokemon: Pokemon[]) {
    this.name = teamName;
    this.pokemonList = allPokemon;
  }

}


export class Pokemon {
  number: number;
  generation: string;
  name: string;
  priority_moves: string;
  abilities: string[];
  speed: string;
  pic: string;
  icon: string;
  alternate_forms: string[];
  mega_list: string[];
  base_name: string;
  url: string

  constructor(pokemonName: string) {
    this.name = pokemonName;

    let obj = gen7Data['charizard']
    // this.name = obj.name;
    // let obj = gen7Data[pokemonName]
    this.generation = obj.generation;
    // this.priority_moves = obj.priority_moves;
    this.abilities = obj.abilities;
    this.speed = obj.speed;
    this.pic = "gen" + this.generation + "/images/" + obj.pic;
    this.icon = "gen" + this.generation + "/images/" + obj.icon;
    this.alternate_forms = obj.alternate_forms;
    this.mega_list = obj.mega_list;
    this.base_name = obj.base_name;
    this.url = obj.url
  }

}

