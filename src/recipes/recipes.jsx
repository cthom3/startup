import React from 'react';

import {recipesDisplay} from './recipesDisplay';

export function Recipes(props){
    return (
        <main className='bg-secondary text-light'>
            <recipesDisplay userName={props.userName} />
        </main>
    )
}