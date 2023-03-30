import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { Component } from 'react';

// const App = () =>{
//   return(
//     <div className='App'>
//     <h1 className='App-title'>monsters Rolodex</h1>
    
//   {/*  <SearchBox 
//     className='monsters-search-box'
//     onChangeHandler={onSearchChange} 
//     placeholder='search monsters'/>
//      <CardList monsters={filteredMonsters}/>*}
//      </div>
//   );
// };

class App extends Component {
  constructor(){
    super();
    this.state = {
       monsters: [],
       searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
      console.log(users)
      this.setState( {monsters: users})
    });
  }
   onSearchChange = (event)=>{
    console.log(event.target.value);
     const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(()   => {
      return {searchField}
    });

    
  }


  render(){
     
     const {monsters,searchField} = this.state;
     const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);

     });
    return (
      <div className="App">
      <h1 className='App-title'>monsters Rolodex</h1>
      <SearchBox 
      className='monsters-search-box'
      onChangeHandler={onSearchChange} 
      placeholder='search monsters'/>
       <CardList monsters={filteredMonsters}/>
      </div>
    );

  }
 
}

export default App;
