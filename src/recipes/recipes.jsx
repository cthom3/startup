import React from 'react';

import {User} from './user';
import {RecipesDisplay} from './recipesDisplay';

export function Recipes(props){
    return (
        <main className='bg-secondary text-light'>
            <User userName={props.userName} />
            <RecipesDisplay userName={props.userName} />
        </main>
    );
}