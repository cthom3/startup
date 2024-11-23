import React from 'react';

import {RecipesDisplay} from './recipesDisplay';

export function Recipes(props){
    return (
        <main className='bg-secondary text-light'>
            <RecipesDisplay userName={props.userName} />
        </main>
    );
}