# CS-260-Startup

## Elevator Pitch:

Having home-cooked meals brings lots of comfort, but it can be difficult to keep track of and share recipes you love. This website, Comfort Cooking: Recipe Repository, will allow you to easily search and add recipes, rate recipes, and see the ratings of others instantly. With your own account, everything is stored for easy access for every time you are in the kitchen. 

## Key Features:
- Add recipes
- Share recipes
- Rate recipes
- See ratings of other users
- Personal Account

## Description:
1. HTML: 
    - Home page --> includes placeholder for login
    - Recipes page
        - setup for recipes in sections (will be edited later to have section open up and collapse), currently shows breakfast open and other sections collapsed (this will be filled in from database in the future)
        - images for recipes included
        - Recipe as a hyperlink for now, opens in a new page
        - Add recipe button but html in navigation bar for now until it is connects through JavaScript
        - WebServer (3rd party service calls) picture placeholder
        - Recommendations in navigation bar (this is where WebSocket data will go)
    - About page --> application textual content
    - All pages--> navigation bar
    - Github directory attached in the footer
2. CSS:
    - Style that allows for easy readability of recipes on various screens, complimentary color choices
3. JavaScript: 
    - Add a recipe --> opens box to add recipe ingredients and instructions
    - Share button --> add information of user you want to share recipe with
    - Create an account/login --> adds account information to database
    - Star rating system
4. React:
    - A page with components that interface with user actions and JavaScript
5. Web service:
    - Foodish API --> display random pictures of food dishes
    - Backend service: retrieve recipes and ratings
6. Authentication:
    - Create account
    - Verify Login
    - Display username after login
7. Database data:
    - Stores star ratings for recipes
    - Stores account info
    - Stores associated recipes
8. WebSocket data:
    - Ratings for recipes are broadcast to other users

## Design Images:

![Website Design](WebsiteDesign.png)