import React from 'react';

 export class SearchBar extends React.Component{
 	render() {
 		return 	<div>
 					<form>
 						<label><input type='text' value= {this.props.filterText}
 								onChange={this.props.onTextChange}
 						/></label><br />
 						<label>
 							 <input type="checkbox" onChange={this.props.onCheckboxChange}
 							 		checked={this.props.likesKids} value="1"/> 
 							 Only show kitties that likes kids
 						</label>
 					</form>
 				</div>
 	}

}

