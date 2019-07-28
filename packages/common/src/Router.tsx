import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Battle1v1Page } from "./modules/Battle1v1Page";
import { TeamPage } from "./modules/TeamPage";
import { RouterStoreContext } from "./stores/RouterStore";

export const Router = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  return routerStore.screen === 'TeamPage' ? (<TeamPage />) : (<Battle1v1Page />);
});