import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

const Header = () => (
    <header className='App-header'>
        <h1 className="App-title"><Link to='/'><img src={logo} className='App-logo' alt='logo' /></Link>&nbsp;&nbsp;Technical Campaign</h1>
    </header>
)
export default Header
