import React from 'react';
import {BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {Login} from './login/login';
import {Recipes} from '.recipes/recipes';
import {About} from './about/about';
import {AuthState} from './login/authState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
   const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
   const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
   const [authState, setAuthState] = React.useState(currentAuthState);
   
   return (
    <BrowserRouter>
        <div className='body bg-secondary text-light'>
            <header className='container-fluid'>
                <nav className='navbar fixed-top'>
                    <div className='navbar-brand'>
                        Comfort Cooking
                    </div>
                    <menu className='navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to=''>
                                Login
                            </NavLink>
                        </li>
                        {authState === AuthState.Authenticated && (
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='recipes'>
                                    Recipes
                                </NavLink>
                            </li>
                        )}
                        
                    </menu>
                </nav>
            </header>
        </div>
    </BrowserRouter>
   )
}

