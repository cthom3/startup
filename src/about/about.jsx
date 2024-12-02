import React from 'react';
import './about.css';

export function About(props) {
    const [imageUrl, setImageUrl]=React.useState('');

    React.useEffect(() => {
        fetch(`https://foodish-api.com/api/`)
            .then ((response)=> response.json())
            .then ((data) => {
                const containerEl=document.querySelector('#picture');
                const apiUrl=data.image;
                setImageUrl(apiUrl);
            }) 
            .catch();
    }, []);

    return (
        <main className="container-fluid">
            <div>
                <div id='picture'>
                    <img src={imageUrl} alt='image' width='50%'/>
                </div>
                <p>Comfort Cooking allows you to save recipes all in one place so you can find them everytime. You can give each recipe a rating and view the ratings of others to get new recipe ideas.</p>       
            </div>
        </main>
    );
}
