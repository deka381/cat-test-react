import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/searchBar.jsx';
import {CatTable} from './components/catTable.jsx';

var kitty = {category: "male", age: "9", likesKids: true, name: "Hairy Potter"};

    class App extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                name:"lll",
                border: "1px solid black",
            }
        }

        render() {
            return  <section > 
            {this.props.kitties.name}
                     <SearchBar/>,
                     <CatTable />
                    </section>
                    
        }
    }
    

   
      export default App;