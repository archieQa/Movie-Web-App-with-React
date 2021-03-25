import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './header.js';
import SimpleBottomNavigation from './MainNav.js';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';



const App = () => {
  return (
    <BrowserRouter>
    <Header />
    
    <div className="App">
      <Container>
        <Switch>
         <Route path='/' component={Trending} exact/>
         <Route path='/Movies' component={Movies}/>
         <Route path='/Series' component={Series}/>
         <Route path='/Search' component={Search}/>


         
        </Switch>
      </Container>
    </div>
    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
