import React from 'react';
import {CatRow} from './catRow.jsx';
import {CategoryRow} from './categoryRow.jsx';
 
 export class CatTable extends React.Component{
 
 	GetType(category){
 		const type = this.props.kitties.filter(cat=>{
 			return cat.category ===category;
 		});

 		const rows = type.map (cat =>{

 			const style={
        		color:this.props.color,
      		};
      		if (!cat.likesKids) {
      			style.color="red";
      		}
      		return(
      				<tr key={cat.name} style={style}>
      					<td>{cat.name}</td>
      					<td>{cat.age}</td>
      				</tr>

      			)
 		});

 		return rows;
 	}

 	render() {
 		const resultMale = this.GetType('male');
 		const resultFemale = this.GetType('female');

 		return	<table>
 					<CatRow/>
 				 	<tbody>
 						<CategoryRow category='male'/>
 						{resultMale}
 						<CategoryRow category='female'/>
 						{resultFemale}
 					</tbody>
 				</table>
 	}
}