import React from 'react';
import {CatRow} from './catRow.jsx';
import {CategoryRow} from './categoryRow.jsx';
 
 export class CatTable extends React.Component{
 
 	render() {
 			return	 <table>
 						<CategoryRow/>
 						<CatRow/>
 					</table>
 		}	

}