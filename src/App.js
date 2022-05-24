import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import WatchList from './WatchList';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';
import React, { useState } from 'react';
import { logout } from './services/supabase-utils';

function App() {
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('supabase.auth.token'));

  return (
    
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/WatchList">My Watch List</Link>
          </li>
          <button onClick={logout}>Logout</button>
          {/* make the links to the search and watchlist page and the logout button show on every page */}
        </ul>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {
              currentUser 
                ? <Redirect to="/search"/>
                : <AuthPage setCurrentUser={setCurrentUser} />
            }
          </Route>
          <Route path="/search">
            {
              !currentUser 
                ? <Redirect to="/"/>
                : <SearchPage />
            }
            
          </Route>
          <Route path="/">
            {
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
