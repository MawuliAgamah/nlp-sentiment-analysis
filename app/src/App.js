import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';



const options = [

  { value: 'twitter', label: 'Twitter' },
  { value: 'reddit', label: 'Reddit' },
  { value: 'googleNews', label: 'Google News' }

];


function App() {
  return (
    <div className="App">
      <header className="header"> </header>
      <Select className="mt-4 col-md-8 col-offset-4" options={options} />

    </div>
  );
}

export default App;
