import { observable } from "mobx";
import { createContext } from "react";

type Routes = 'TeamPage' | 'Battle1v1Page'  //enables auto complete

class RouterStore {
  @observable screen: Routes = 'TeamPage'
}

export const RouterStoreContext = createContext(new RouterStore());