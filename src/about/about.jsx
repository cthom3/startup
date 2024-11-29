import React from 'react';
import './about.css';

export function About(props) {
    const [imageUrl, setImageUrl]=React.useState();

    React.useEffect(() => {
        fetch(`https://foodish-api.com/`)
            .then ((response)=> response.json())
            .then ((data) => {
                const containerEl=document.querySelector('#picture');
                const apiUrl=`https://foodish-api.com/`;
                setImageUrl(apiUrl);
            }) 
            .catch();
    })

    return (
        <main className="container-fluid">
            <div>
                <img src={imageUrl} alt='image'/>
                <p>Comfort Cooking is the site to save recipes so you can find them everytime. You can share and receive recipes from others. You can save notes as well.</p>
            </div>
        </main>
    );
}
