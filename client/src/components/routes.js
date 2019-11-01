import React from "react";
import { Route, Switch } from "react-router-dom";


import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import ArtistIndex from "./artists/index";
import ArtistShow from "./artists/show";
import ArtistNew from "./artists/new";
import ArtistEdit from "./artists/edit";
import ArtistDestroy from "./artists/destroy";

import StageIndex from "./stages/index";
import StageShow from "./stages/show";
import StageNew from "./stages/new";
import StageEdit from "./stages/edit";
import StageDestroy from "./stages/destroy";


import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";

function Routes() {
  return (
    <Switch>

    <Route exact path="/" component= {Home} />
    <Route exact path="/about" component= {About} />
    <Route exact path="/contact" component= {Contact} />

  
      <Route exact path="/artists" component={ArtistIndex} />
      <Route exact path="/new" component={ArtistNew} />
      <Route exact path="/:id" component={ArtistShow} />
      <Route exact path="/:id/edit" component={ArtistEdit} />
      <Route exact path="/:id/destroy" component={ArtistDestroy} />

        
      <Route exact path="/stages" component={StageIndex} />
      <Route exact path="/new" component={StageNew} />
      <Route exact path="/:id" component={StageShow} />
      <Route exact path="/:id/edit" component={StageEdit} />
      <Route exact path="/:id/destroy" component={StageDestroy} />
      
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />

    </Switch>
  );
}

export default Routes;