import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/searchBar.jsx';
import {CatTable} from './components/catTable.jsx';

var kitty = {category: "male", age: "9", likesKids: true, name: "Hairy Potter"};

    class App extends React.Component{
        constructor(props) {
            super(props);
            this.state={
                filterText:"",
                border: "1px solid black",
                likesKids: false,
            }
        }
        handleTextChange=event =>{
            this.setState({
                filterText: event.target.value,
            });
        }
        handleCheckChange=event =>{
            this.setState({
                likesKids: event.target.checked,
            })
        }


        render() {
            return  <section > 
            
                     <SearchBar filterText={this.state.filterText} onTextChange={this.handleTextChange}
                                 onCheckboxChange= {this.handleCheckChange} likesKids={this.state.likesKids}/>,
                     <CatTable kitties={this.props.kitties} />
                    </section>
                    
        }
    }
    

   
      export default App;