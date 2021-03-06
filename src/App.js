import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Menu from './component/MenuComponent';
import {DISHES} from './shared/dishes';
class App extends Component{

   constructor(props){

   super(props);

     this.state={
      dishes:DISHES

     };
   }

 render() {
  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Added reactsrap Navbar and NavbarBrand  </NavbarBrand>
          </div>
        </Navbar>
        <Menu  dishes={this.state.dishes}/>
      </div>
     
  );
}
}
export default App;