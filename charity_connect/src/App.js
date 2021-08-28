import React from 'react';
import Dropdown from './components/dropdown';
import Search from './components/search';
import Group from './assets/Group.png'
import NavigationBar from './components/navigation';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div className="App-header">
        <div className="title">
          <text>
        CareConnect
        </text>
        </div>
        <div className="intro">
          <text>
          Supporting marginalized communities by connecting them with 50+ relevant organizations and services in Waterloo Region
          </text>
        </div>
        <div>
        <Search/>
        </div>
        <div className="or">
          <text>
          Or select a service you are looking for:
          </text>
        </div>
        <div className="drop">
        <Dropdown/>
        </div>
      </div>
      <img className="graphic" src={Group} />
    </div>
    
  );
}

export default App;