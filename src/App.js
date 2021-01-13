import './App.css';
import React ,{ Component } from 'react';
import { CardList } from "./Components/Card-List/card-list.component";
import {SearchBox} from "./Components/search-box/search-box.component";


class App extends Component {
  constructor(){
    super()
    this.state={
      monsters:[ ],
      searchfield:''
    };
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}))
};

  render()
  {
  const {monsters,searchfield} = this.state;
  const filteredMonsters=monsters.filter(monsters => 
    monsters.name.toLowerCase().includes(searchfield.toLowerCase()));
    return(
      
      <div className="App">
        <SearchBox
        placeholder="search monsters"
        handleChange={e => this.setState({searchfield:e.target.value})}
        />
        <CardList monsters={filteredMonsters}/>
    </div>
    )
  }}
  export default App
