import React from 'react';
import {BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {Login} from './login/login';
import {Recipes} from './recipes/recipes';
import {Recommendations} from './recommendations/recommendations';
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
                        {authState === AuthState.Authenticated && (
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='recommendations'>
                                    Recommendations
                                </NavLink>
                            </li>
                        )}
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='about'>
                                About
                            </NavLink>
                        </li>
                    </menu>
                </nav>
            </header>

            <Routes>
                <Route
                    path='/'
                    element={
                        <Login
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => {
                                setAuthState(authState);
                                setUserName(userName);
                            }}
                        />
                    }
                    exact
                />
                <Route path='/recipes' element={<Recipes userName={userName} />} />
                <Route path='/recommendations' element={<Recommendations />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className='bg-secondary text-light'>
                <div className='container-fluid'>
                    <span>Author: Catherine Applegate</span>
                    <a className="link-light" href="https://github.com/cthom3/Startup">GitHub</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
   )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown,</main>;
}

export default App;
