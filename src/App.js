import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import Menu from './component/MenuComponent';
function App() {
  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Added reactsrap Navbar and NavbarBrand  </NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
     
  );s
}

export default App;
