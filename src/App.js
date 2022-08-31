import './App.css';
import JSONDATA from './MOCK_DATA.json'
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div class="container App">
      <h1 class="">Names Search 🔥</h1>
      <input type="text" placeholder="type here..." onChange={event => setSearchTerm(event.target.value)}/>
      {
        JSONDATA.filter((val)=>{
          if (searchTerm ==="") {
            return val
          } else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
          return null;
        }).map((val, key) => {
          return <div class="user" key={key}>
            <p>{val.first_name}</p> </div>
        })
      }
    </div>);
}

export default App;