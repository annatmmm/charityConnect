import React from 'react';
import Search from './components/search';
import Group from './assets/Group.png';
import Dropdown from './components/dropdown';



function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="title">
          <text>Care Connect
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