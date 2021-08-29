import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import SearchPage from './routes/SearchPage';
import CharityDetailPage from './routes/CharityDetailPage';
import CharityInquiryPage from './routes/CharityInquiryPage';
import VolunteerSignInPage from './routes/VolunteerSignIn';
import OrganizationSignInPage from './routes/OrganizationSignInPage';
import ResultsPage from './routes/ResultsPage';

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={SearchPage}/>
        <Route exact path="/details/:id" component={CharityDetailPage}/>
        <Route exact path="/inquiry/:id" component={CharityInquiryPage}/>
        <Route exact path="/volunteer" component={VolunteerSignInPage}/>
        <Route exact path="/organization" component={OrganizationSignInPage}/>
        <Route exact path="/results" component={ResultsPage}/>
      </Router>
    </div>
  );
}

export default App;