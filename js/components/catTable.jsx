import React from 'react';
import {CatRow} from './catRow.jsx';
import {CategoryRow} from './categoryRow.jsx';
 
 export class CatTable extends React.Component{
 
 	render() {
 		var rows = [];
 		 var lastCategory = null;

 		this.props.kitties.forEach(function(kitty) {
           if (kitty.category !== lastCategory) { 
               rows.push(<CategoryRow category= { kitty.category }  key= { kitty.category } />);
      }
      		rows.push(<CatRow kitty={kitty} key={kitty.name} />);
      		lastCategory = kitty.category;

    		});
 			return	 <table>
 						<thead>
 						<tr> 
 							<th>Name</th>
 							<th>Age</th>
 						</tr>
 						</thead>
 						<tbody>
 							{rows}
 						</tbody> 
 					</table>
 		}	

}