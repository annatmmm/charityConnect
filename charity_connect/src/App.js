

import Search from './components/search';
import Group from './assets/Group.png'


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="title">
          <text>
        communityPlus
        </text>
        </div>
        <div className="intro">
          <text>
          Supporting marginalized communities by connecting them with 50+ relevant organizations and services in Waterloo Region
          </text>
        </div>
        <Search/>
      </div>
      <img className="graphic" src={Group} />
    </div>
  );
}

export default App;