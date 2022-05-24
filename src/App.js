import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import WatchList from './WatchList';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';
import React, { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  return (
    
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {
              // this protecting of routes and holding on to the user data in state --- that's new!!
              currentUser 
                ? <Redirect to="/search"/>
                : <AuthPage setCurrentUser={setCurrentUser} />
            }
          </Route>
          <Route path="/search">
            {
              // this protecting of routes and holding on to the user data in state --- that's new!!
              !currentUser 
                ? <Redirect to="/"/>
                : <SearchPage />
            }
            
          </Route>
          <Route path="/">
            {
              // this protecting of routes and holding on to the user data in state --- that's new!!
              !currentUser 
                ? <Redirect to="/"/>
                : <WatchList />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
