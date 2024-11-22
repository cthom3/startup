import React from 'react';
import './about.css';

export function About(props) {
    const [imageUrl, setImageUrl]=React.useState();

    React.useEffect(() => {
        setImageUrl('Oatmeal.jpg');
    })

    return (
        <main class="container-fluid">
            <div>
                <img src={imageUrl} alt='image'/>
                <p>Comfort Cooking is the site to save recipes so you can find them everytime. You can share and receive recipes from others. You can save notes as well.</p>
            </div>
        </main>
    );
}
