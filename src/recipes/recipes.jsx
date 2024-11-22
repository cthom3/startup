import React from 'react';

import {recipesDisplay} from './recipesDisplay';

export function Recipes(props){
    return (
        <main className='bg-secondary'>
            <recipesDisplay userName={props.userName} />
        </main>
    )
}