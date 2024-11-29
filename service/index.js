const express = require('express');
const uuid = require ('uuid');
const app = express();

let users = {};
let ratings = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.json());
app.use(express.static('public'));

var apiRouter=express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req,res)=> {
    const user=users[req.body.email];
    if (user) {
        res.status(409).send({msg: 'Existing user'});
    } else {
        const user = {email:req.body.email, password: req.body.password, token: uuid.v4()};
        users[user.email]= user;
        res.send({token: user.token});
    }
});

apiRouter.post('/auth/login', async (req,res)=> {
    const user=users[req.body.email];
    if (user){
        if (req.body.password === user.password){
            user.token=uuid.v4();
            res.send({token: user.token});
            return;
        }
    }
    res.status(401).send({msg: 'Unauthorized'});
});

apiRouter.delete('/auth/logout', (req,res) => {
    const user= Object.values(users).find((u)=> u.token === req.body.token);
    if (user) {
        delete user.token;
    }
    res.status(204).end();
});

apiRouter.get('/ratings', (_req, res)=> {
    res.send(ratings);
});

apiRouter.post('/rating', (req, res) => {
    ratings = updateRatings(req.body,ratings);
    res.send(ratings);
});

app.use((_req, res) => {
    res.sendFile ('index.html', {root: 'public'});
});

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});

function updateRatings (newRating, ratings) {
    let found = false;
    for (const [i, prevRating] of ratings.entries()) {
        if (newRating.rating > prevRating.rating){
            ratings.splice(i,0,newRating);
            found = true;
            break;
        }
    }
    if (!found) {
        ratings.push(newRating);
    }
    if (ratings.length >10){
        ratings.length = 10;
    }
    return ratings;
}
