import React from 'react';

import Button from 'react-bootstrap/Button';
import {MessageDialog} from './messageDialog';

export function Unauthenticated(props){
    const [userName,setUserName]=React.useState(props.userName);
    const [password,setPassword]=React.useState('');
    const [displayError,setDisplayError]=React.useState(null);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser(){
        loginOrCreate(`/api/auth/create`);
    }
    
    async function loginOrCreate(endpoint){
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({email: userName, password: password}),
            headers: {
                'Content-type' : 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200){
            localStorage.setItem('userName', userName);
            props.onLogin(userName);
        } else {
            try {
                const body = await response.json();
                setDisplayError(`Error: ${body.msg}`);
            } catch (error) {
                setDisplayError('Unexpected error from server');
            }

        }

    }

    return (
        <>
            <div>
                <div>
                    <span>Email:</span>
                    <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='emailaddress@email.com' />
                </div>
                <div>
                    <span>Password:</span>
                    <input className="form-control" type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="password" />
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