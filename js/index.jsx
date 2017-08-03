import React from 'react';
import ReactDOM from 'react-dom';
import {SearchBar} from './components/searchBar.jsx';
import {CatTable} from './components/catTable.jsx';



    class App extends React.Component{
        constructor() {
            super(...arguments);
            this.state={
                filterText:'',
                likesKids: false,
                color:"green",
            }
        }
        handleTextChange=event=>{
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
                                <SearchBar onTextChange={this.handleTextChange} onCheckboxChange={this.handleCheckChange}  filterText={this.state.filterText} likesKids={this.state.likesKids}/>

                            <section>
                                <CatTable kitties={kitties} color={this.state.color}/>
                            </section>
                        </section>
        }
    }
    

   
      export default App;