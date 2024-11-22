import React from 'react';

import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props){
    const [userName,setUserName]=React.useState(props.userName);
    const [password,setPassword]=React.useState('');
    const [displayError,setDisplayError]=React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function createUser(){
        localStorage.setItem('UserName', userName);
        props.onLogin(userName);
    }
    
    return (
        <>
            <div>
                <div>
                    <span>Email:</span>
                    <input class='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='emailaddress@email.com' />
                </div>
                <div>
                    <span>Password:</span>
                    <input class="form-control" type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="password" />
                </div>
                <Button variant='primary' onClick={()=> loginUser()} disabled={!userName || !password}>
                    Login
                </Button>
                <Button variant='primary' onClick={()=> createUser()} disabled={!userName || !password}>
                    Create Account
                </Button>
            </div>

            <MessageDialog message={displayError} onHide={()=> setDisplayError(null)} />
        </>
    );
}