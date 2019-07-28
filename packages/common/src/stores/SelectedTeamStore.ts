import { observable } from "mobx";
import { createContext } from "react";
import { PokemonTeam } from "../modules/MyObjects";

class SelectedTeamStore {
  @observable currentTeam: PokemonTeam = null;
}

export const SelectedTeamStoreContext = createContext(new SelectedTeamStore());