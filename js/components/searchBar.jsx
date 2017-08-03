import React from 'react';

 export class SearchBar extends React.Component{
 	render() {
 		return 	<div>
 					<form>
 						<input type='text' placeholder="szukaj kota" />
 						<p>
 							 <input type="checkbox" /> Only show kitties that likes kids
 						</p>
 					</form>
 				</div>
 	}

}

