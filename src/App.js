import React from "react";
// global style
import GlobalStyle from './components/GlobalStyle';

// import pages
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import MyWork from './pages/MyWork';
import Nav from './components/Nav';

//router
import { Switch, Route } from "react-router-dom";

//we surrounded our components within the route tag
//on the route tag we can define a few properties
//one is 'path', and this lets you say when you want to render out this component
// -- based on what the url is gonna be
// for about we put / , so every time we have / or nothing, we render out the about page
// switch allows us to see different things depending on the url
// switch stops as soon as it gets the first match.
// so when it saw slash, it stopped at slash and only rendered out the about page.
// we can't see the /work and /contact rendered out anymore
// the exact key word allows us to match the url directly

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
       <Route path="/" exact>
         <AboutMe />
       </Route>
       <Route path="/work">
        <MyWork />
       </Route>
       <Route path="/contact">
        <ContactMe />
       </Route>
      </Switch>
    </div>
  );
}

export default App;
