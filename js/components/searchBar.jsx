import React from 'react';

 export class SearchBar extends React.Component{
 	render() {
 		return 	<div>
 					<form>
 						<input 	type='text' placeholder="szukaj kota" value= {this.props.filterText}
 								onChange={this.props.onTextChange}
 						/>
 						<p>
 							 <input type="checkbox" onChange={this.props.onCheckboxChange}
 							 		checked={this.props.likesKids} value="1"/> 
 							 Only show kitties that likes kids
 						</p>
 					</form>
 				</div>
 	}

}

