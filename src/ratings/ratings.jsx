import React from 'react';
import './ratings.css';

export function Ratings(){
    const [ratings, setRatings]= React.useState ([]);

    React.useEffect(()=> {
        fetch('/api/recipes')
            .then((response)=> response.json())
            .then((ratings)=> {
                setRatings(ratings);
            });
    }, []);

    const ratingsRow = [];
    if (ratings.length) {
        for (const [i,rating] of ratings.entries()) {
            ratingsRow.push(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{rating.name}</td>
                    <td>{rating.rating}</td>
                </tr>
            );
        }
    } else{
        ratingsRow.push(
            <tr key='0'>
                <td colSpan='3'>Be the first to rate</td>
            </tr>
        );
    }

    return (
        <main className='container-fluid bg-secondary text-light'>
            <table className= 'table'>
                <thead className = 'table-dark'>
                    <tr>
                        <th>#</th>
                        <th>Recipe</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody id='ratings'>{ratingsRow}</tbody>
            </table>
        </main>
    );
}