import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/watchlist">
            <WatchList />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <AuthPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
