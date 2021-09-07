
import './App.css';
import AllPosts from "./Components/displayAllPosts"
import { Search } from './Components/SubredditSearch';

function App() {

  return (
    <div className="App">
      <div className='main-section-container'>
        <Search />
        <AllPosts numberOfPosts={100} />
      </div>
    </div>
  );
}

export default App;
