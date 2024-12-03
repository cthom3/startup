import React from 'react';
import {Collapse} from 'react-collapse';
import {WidthProvider, Responsive} from 'react-grid-layout';
import {Button} from 'react-bootstrap';
import './recipesDisplay.css';
import ReactGridLayout from 'react-grid-layout';

const ResponsiveReactGridLayout=WidthProvider(Responsive);

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
    const [imagePreview,setImagePreview]=React.useState(null);
    const [isModalOpen, setIsModalOpen]=React.useState(false);
    React.useEffect(()=> {
        fetch('/api/recipes')
            .then((response)=>response.json())
            .then((recipes) =>{
                setRecipecards(recipes);
            });
    },[]);

    async function saveRecipe(newRecipe){
        await fetch('/api/recipe', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newRecipe),
        });
    }

    const AddRecipe =()=> {
        if (newRecipe.name && newRecipe.image && newRecipe.rating && newRecipe.link && newRecipe.category) {
            const updatedRecipes={...recipecards};
            if (!updatedRecipes[newRecipe.category]){
                updatedRecipes[newRecipe.category]=[];
            }
            updatedRecipes[newRecipe.category].push(newRecipe);
            saveRecipe(newRecipe);
            setRecipecards(updatedRecipes);
            setNewRecipe({name: '', image: '', rating: '', link: '', category: ''});
            setImagePreview(null);
            closeModal();
        } else{
            alert('Please fill out all fields');
        }
    };

    const handleImageChange=(event)=>{
        const file=event.target.files[0];
        if (file){
            const imageUrl=URL.createObjectURL(file);
            setImagePreview(imageUrl);
            setNewRecipe({...newRecipe,image:imageUrl});
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

    const gridLayoutConfig={
        className: "layout",
        isDraggable: false,
        isResizable: false

    };

    return (
        <main className='container-fluid bg-secondary text-light'>
            <h1>
                My Recipes
            </h1>
            <Button onClick={openModal}>Add Recipe</Button>
            {isModalOpen && (
                <div>
                    <div>
                        <h2>Add a New Recipe</h2>
                        <input type="text" placeholder="Recipe Name" value={newRecipe.name} onChange={(e)=>setNewRecipe({...newRecipe, name:e.target.value})}/>
                        <input type="file" onChange={handleImageChange}/>
                        {imagePreview &&(
                            <div>
                                <img src={imagePreview} width="20%"/>
                            </div>
                        )}
                        <input type="text" placeholder="Rating (1-5)" value={newRecipe.rating} onChange={(e)=>setNewRecipe({...newRecipe, rating:e.target.value})}/>
                        <input type="text" placeholder="Recipe Link" value={newRecipe.link} onChange={(e)=>setNewRecipe({...newRecipe, link:e.target.value})}/>
                        <input type="text" placeholder="Category" value={newRecipe.category} onChange={(e)=>setNewRecipe({...newRecipe, category:e.target.value})}/>
                        <Button onClick={AddRecipe}>Add Recipe</Button>
                        <Button onClick={(closeModal)}>Close</Button>
                    </div>
                </div>
            )}
            {Object.keys(recipecards).map((category) =>(
                <div key={category}>
                    <Button variant="secondary" onClick={()=> toggleSectionCollapse(category)}>
                        {collapsedSection[category]? '': ''}{category}
                    </Button>
                    <Collapse isOpened={!collapsedSection[category]}>
                        <ResponsiveReactGridLayout
                            {...gridLayoutConfig}
                        >
                            {recipecards[category].map((recipecard, index)=>(
                                <div key={index} data-grid={{x:(index%4)*3, y:Math.floor(index/4)*4, w:3, h:3}}>
                                    <img src={recipecard.image} alt={recipecard.name} width="70%"/>
                                    <br />
                                    <a className="link-dark" href={recipecard.link}>{recipecard.name}</a>
                                    <br/>
                                    <span className="text-dark">{recipecard.rating}</span>
                                </div>
                            ))}
                        </ResponsiveReactGridLayout>
                    </Collapse>
                </div>
            ))}
        </main>
    );
}

