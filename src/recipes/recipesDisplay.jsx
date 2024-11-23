import React from 'react';
import {Collapse} from 'react-collapse';

import {Button} from 'react-bootstrap';
import './recipesDisplay.css';

export function RecipesDisplay(props) {
    const userName=props.userName;
    const [recipecards,setRecipecards]=React.useState([]);
    const [collapsedSection,setCollapsedSection]=React.useState([]);
    const [newRecipe,setNewRecipe]=React.useState({
        name: '',
        image: '',
        rating: '',
        link: '',
        category: '',
    });
    const [isModalOpen, setIsModalOpen]=React.useState(false);
    React.useEffect(()=> {
        const recipeCardsText=localStorage.getItem('recipecards');
        if (recipeCardsText){
            setRecipecards(JSON.parse(recipeCardsText));
        }
    },[]);

    React.useEffect(()=> {
        localStorage.setItem('recipecards', JSON.stringify(recipecards));
    })

    const AddRecipe =()=> {
        if (newRecipe.name && newRecipe.image && newRecipe.rating && newRecipe.link && newRecipe.category) {
            const updatedRecipes={...recipecards};
            if (!updatedRecipes[newRecipe.category]){
                updatedRecipes[newRecipe.category]=[];
            }
            updatedRecipes[newRecipe.category].push(newRecipe);
            setRecipecards(updatedRecipes);
            setNewRecipe({name: '', image: '', rating: '', link: '', category: ''});
        } else{
            alert('Please fill out all fields');
        }
    };

    const toggleSectionCollapse= (category) => {
        setCollapsedSection((prev)=> ({...prev, [category]: !prev[category]}));
    };

    const openModal=()=>{
        setIsModalOpen(true);

    };

    const closeModal=()=>{
        setIsModalOpen(false);

    };

    // const recipesRow=[];
    // if (recipecards.length) {
    //     for (const [i,recipecard] of recipecards.entries()){
    //         recipesRow.push(
    //             <thead>
    //                 <tr>{recipecard.type}</tr>
    //                 <tr>{recipecard.picture}</tr>
    //                 <tr>{recipecard.name}</tr>
    //                 <tr>{recipecard.rate}</tr>
    //             </thead>

    //         );
    //     }
    // } else {
    //     recipesRow.push(
    //         <tr key='0'>
    //             <td colSpan='3'>Add your first recipe!</td>
    //         </tr>
    //     );
    // }
    return (
        // <main className='container-fluid bg-secondary text-light'>
        //     <Button variant='primary' onClick={()=> navigate('add')}>
        //         Add Recipes
        //     </Button>
        //     <table className= 'table'>
        //         <thead className = 'table-dark'>
        //             <tr>Type</tr>
        //             <tr>Picture</tr>
        //             <tr>Name</tr>
        //             <tr>Rating</tr>
        //         </thead>
        //         <tbody id='ratings'>{recipesRow}</tbody>
        //     </table>
        // </main>

        <main className='container-fluid '>
            <h1>
                My Recipes
            </h1>
            <Button onClick={openModal}>Add Recipe</Button>
            {isModalOpen && (
                <div>
                    <div>
                        <h2>Add a New Recipe</h2>
                        <input type="text" placeholder="Recipe Name" value={newRecipe.name} onChange={(e)=>setNewRecipe({...newRecipe, name:e.target.value})}/>
                        <input type="file" placeholder="Recipe Image" value={newRecipe.image} onChange={(e)=>setNewRecipe({...newRecipe, image:e.target.value})}/>
                        <input type="text" placeholder="Rating (1-5)" value={newRecipe.rating} onChange={(e)=>setNewRecipe({...newRecipe, rating:e.target.value})}/>
                        <input type="text" placeholder="Recipe Link" value={newRecipe.link} onChange={(e)=>setNewRecipe({...newRecipe, link:e.target.value})}/>
                        <input type="text" placeholder="Category" value={newRecipe.category} onChange={(e)=>setNewRecipe({...newRecipe, category:e.target.value})}/>
                        <Button onClick={AddRecipe}>Add Recipe</Button>
                        <Button onClick={(closeModal)}>Close</Button>
                    </div>
                </div>
            )}
            <div>
                {Object.keys(recipecards).map((category) =>(
                    <div key={category}>
                        <Button onClick={()=> toggleSectionCollapse(category)}>
                            {collapsedSection[category]? '': ''}{category}
                        </Button>
                        <Collapse isOpened={!collapsedSection[category]}>
                            <div>
                                <div className="row">
                                    <p className="col-sm-4">
                                        <img src="Pancakes.jpg" alt="Pancakes" width="70%"/>
                                    </p>

                                </div>
                                {/* <div class="container">
                    <h4>Breakfast</h4>
                    <div class="row">
                        <p class="col-sm-4">
                            <img class="images" src="Pancakes.jpg" alt="Pancakes" width="70%">
                            <br />
                            <a class="link-light" href="display.html">Pancakes</a>
                            <br />
                            <span>4.7 Stars</span> 
                        </p>
                        <p class="col-sm-4">
                            <img class="images" src="Waffles.jpg" alt="Waffles" width="70%">
                            <br />
                            Waffles
                            <br />
                            <span>4.6 Stars</span> 
                        </p>
                        <p class="col-sm-4">
                            <img class="images" src="Oatmeal.jpg" alt="Oatmeal" width="70%">
                            <br />
                            Oatmeal
                            <br />
                            <span>4.5 Stars</span> 
                        </p>
                    </div>
                </div> */}
                                {/* <div>
                                    <img src={recipecards.image} alt={recipecards.name} />
                                    <h3>
                                        <a href={recipecards.link}>
                                            {recipecards.name}
                                        </a>
                                    </h3>
                                    <p>{recipecards.rating}</p>
                                </div> */}
                            </div>
                        </Collapse>
                    </div>
                ))}
            </div>
        </main>
    );
}

