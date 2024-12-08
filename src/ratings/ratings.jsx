import React from 'react';
import './ratings.css';

export function Ratings(){
    const [ratings, setRatings]= React.useState ([]);

    React.useEffect(()=> {
        fetch('/api/ratings')
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
                    <td>{i}</td>
                    <td>{rating.name.split('@')[0]}</td>
                    <td>{rating.recipe}</td>
                    <td>{rating.rate}</td>
                    <td>{rating.date}</td>
                </tr>
            );
        }
    } else{
        ratingsRow.push(
            <tr key='0'>
                <td colSpan='5'>Be the first to rate</td>
            </tr>
        );
    }

    return (
        <main className='container-fluid bg-secondary text-light'>
            <table className= 'table'>
                <thead className = 'table-dark'>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Recipe</th>
                        <th>Rating</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody id='ratings'>{ratingsRow}</tbody>
            </table>
        </main>
    );
}