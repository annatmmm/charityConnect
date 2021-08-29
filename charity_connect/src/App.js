import Search from './components/search';
import Group from './assets/Group.png'
import NavigationBar from './components/navigation';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div className="App-header">
        <div className="title">
          <text>Community+</text>
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