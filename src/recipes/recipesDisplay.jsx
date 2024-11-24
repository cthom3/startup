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
                            {/* <div>
                                <img src={recipecards.image} alt={recipecards.name} />
                                <h3>
                                    <a href={recipecards.link}>
                                        {recipecards.name}
                                    </a>
                                </h3>
                                <p>{recipecards.rating}</p>
                            </div> */}

                    </Collapse>
                </div>
            ))}
        </main>
    );
}

