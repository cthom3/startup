const {MongoClient}=require('mongodb');
const bcrypt = require ('bcrypt');
const uuid = require ('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient (url);
const db = client.db('simon');
const userCollection = db.collection('user');
const ratingCollection = db.collection('rating');
const recipeCollection = db.collection('recipe');

(async function testConnection() {
    await client.connect();
    await db.command({ping:1});
})().catch((ex)=>{
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

function getUser(email){
    return userCollection.findOne({email:email});
}

function getUserByToken(token){
    return userCollection.findOne({token:token});
}

async function createUser(email,password){
    const passwordHash=await bcrypt.hash(password,10);
    const user ={
        email: email,
        password: passwordHash,
        token: uuid.v4(),
    };
    await userCollection.insertOne(user);
    return user;
}

async function addRating(rating){
    return ratingCollection.insertOne(rating);
}

async function addRecipe(recipe){
    return recipeCollection.insertOne(recipe);
}

function getRatings(){
    const query = {};
    const cursor = ratingCollection.find(query);
    return cursor.toArray();
}

function getRecipes(){
    const query = {};
    const cursor = recipeCollection.find(query);
    return cursor.toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    addRating,
    addRecipe,
    getRatings,
    getRecipes,
};