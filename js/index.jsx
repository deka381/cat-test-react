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
                color:"green",
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
            });
        }
            render() {
                const kitties = this.props.kitties.filter(cat =>{
                    if (this.state.likesKids && !cat.likesKids) {
                        return false;
                    }

                    if (this.state.filterText.length > 0 && cat.name.indexOf(this.state.filterText) ===-1) {
                        return false;
                    }

                    return true;
                })
            
                return  <section > 
                
                            <SearchBar  filterText={this.state.filterText} onTextChange={this.handleTextChange}
                                        onCheckboxChange= {this.handleCheckChange} likesKids={this.state.likesKids}/>,
                            <CatTable kitties={this.props.kitties} color={this.state.color}/>
                        </section>
                    
        }
    }
    

   
      export default App;