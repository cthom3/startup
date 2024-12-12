# CS-260-Startup

## Startup Websocket:
Note: Because of due dates, I deployed this section before the last one had been graded.
I used WebSockets to notify all of new recipes being added
1. Backend listens for WebSocket connection
    - Completed
2. Frontend makes WebSocket connection
    - When connection made, displayed on recipes page
3. Data sent over WebSocket connection
    -
4. WebSocket data displayed
    -
5. All vissible elements working

## Startup Login:
Note: Because of due dates, I deployed the next section before this section was graded.
1. New User Registration
    - new user stored in database/can create new accounts
2. Existing User Authentication and Logout
    - user authenticated and has option to logout in account tab
3. Store application data in MongoDB
    - stores recipe information
4. Stores and retrieves credentials in MongoDB
    - stores user names and encrypted passwords
5. Restricts application functionality based upon authentication
    - can only see recipes if logged in
      
## Startup Service:
1. Node.js/Express HTTP service
    - Added service folder with index.js file
2. Static middleware for frontend
    - incorporated middleware in index.js file
3. Calls to 3rd party endpoints
    - called foodish API to display an image using fetch
4. Backend service endpoints
    - stores current user on server
    - endpoints for recipes (placeholders-->still need database)
5. Frontend calls service endpoints
    - used fetch functions (login/logout)

## Startup React:
Used JavaScript and React for a single user with placeholders for future developments
1. Vite Bundling
    - Bundled!
2. Components
    - Login --> When you login with credentials, it takes you to a page where you can logout or continue on to recipes
    - Database--> the recipes will be stored in database but are currently just in local storage, appear in a grid
    - WebSocket--> Recommendations page will hold websocket with ratings of recipe of other users
3. Router
    - Routing between pages and components
4. Hooks
    - useEffect used to get info from local storage and display it for each recipe

## Startup CSS:
Stylying of application for final appearance
1. Header, footer, and main content body
    - The header consists of the title and navigation bar and remains at the top with resizing unless the page becomes too small, at which point it disappears
    - The footer is consists of name and github link and stays at the bottom of the page
    - The main content changes from page to page, but scrolls if necessary and has the pictures, buttons, inputs, and text needed for the website
2. Navigation elements
    - The navigation or menu is located at the top of the page in the header and stays visible even if the page scrolls
3. Responsive to window resizing
    - Responds well to different window resizing 
4. Application elements
    - Great spacing and consistent formatting
5. Application text content
    - Consistent fonts and format
    - good contrast between colors of background and text
6. Application images
    - Images, particularly those on the recipes page, resize as needed and are formatted in columns instead of rows if the page is too narrow.

## Startup HTML:
1. HTML pages for each component of application
    - Home page--> login and create account
    - About page--> textual content for website
    - Recipes page--> where database info will go with recipes, ratings, and recipe names
          - Add page--> included link here as this will later be pop up from pushing "Add Recipe" button, form to insert recipe into database
          - Recommendations page--> included link here but this will have the ratings of others later
2. Proper use of HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
    - Each main page has each of these elements
    - Header-->Comfort Cooking and Webserver picture
    - Footer-->Git hub link and Author name
    - Main/Body--> varies depending on page
    - Nav-->Has link to other pages
3. Links between pages as necessary
    - There is a navigation bar at the top with Home, Recipes, and About
    - Currently Recipes page has other links to Add Recipes, Recommendations, and the pancakes recipes, but later these will just be popups from pressing a button or the recipe
4. Application textual content
    - There is an about page explaining the purpose of the website
5. Placeholder for 3rd party service calls
    - In the header on each page, there will be an image from a 3rd party
    - Right now, this appears as the image icon with Webserver text next to it
6. Application images
    - There are images within the recipes page
7. Login placeholder, including user name display
    - On the home page, there is a login placeholder where email (username) is entered as well as a password
    - There is also a button to create an account
8. Database data placeholder showing content stored in the database
    - On the Recipes page, there are pictures with recipes, ratings, and the recipe name. This will eventually be populated by the database. The recipes are shown as only the breakfast section is not collapsed
9. WebSocket data placeholder showing where realtime communication will go
    - On the recipe page, there is a link for recommendations that will later be where WebSocket data will appear
    - This will be comprised of user, rcipe, rating, and date of rating

   
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
