
import './App.css';
import AllPosts from "./Components/displayAllPosts"


function App() {

  return (
    <div className="App">
      <div className='main-section-container'>
        <AllPosts numberOfPosts={30} />
      </div>
    </div>
  );
}

export default App;
