import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchPage from './routes/SearchPage';
import CharityDetailPage from './routes/CharityDetailPage';

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/details" component={CharityDetailPage}/>
      </Router>
    </div>
  );
}

export default App;