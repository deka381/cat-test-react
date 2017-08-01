import React from 'react';
import ReactDOM from 'react-dom';
import App from "./index.jsx";

document.addEventListener('DOMContentLoaded', function(){

  var kitties = [
   {category: "male", age: "4", likesKids: true, name: "Fidel Catstro"},
   {category: "male", age: "9", likesKids: true, name: "Hairy Potter"},
   {category: "male", age: "2", likesKids: false, name: "Grumpy"},
   {category: "female", age: "1", likesKids: true, name: "Jude Paw"},
   {category: "female", age: "2", likesKids: false, name: "Lucifurr"},
   {category: "female", age: "3", likesKids: true, name: "Meowly Cyrus"}
  ];



  ReactDOM.render(
    <App kitties={kitties}/>,
    document.getElementById('app')
  );
});