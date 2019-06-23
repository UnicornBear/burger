![Test Image 1](https://github.com/UnicornBear/newPortfolio/blob/master/burgerApp.jpg)

# burger
An Application for some good old fashion Digital Burger Destruction

## Description

Built utilizing Node.js | Express | MySQL | Handlebars | Materialize

The application demonstrates a simple full stack application
  - The front end is implemented with HTML/CSS and elements from the Materialize framework.  
  - The back end is implemented with Node.js and Express. HTML templating is done with the help of Handlebars.

The user can enter any burger name and add it to the menu. This also adds the new burger entry into the MySQL database. 
The initial burger entry is added as available on the menu and placed on the left side of the screen. 
The user can then eat any burger by clicking on it, which moves it into the adjacent column and updates its status in the database.

## Demo

The demo of the burger eating application can be found hosted on Heruka @ https://calm-island-70689.herokuapp.com

## Installation

To run the application locally, first clone this repository with the following command.

	git clone https://github.com/UnicornBear/burger.git
    	
Next, install the application dependencies.

	cd burger
	npm install
	
Finally, run the node server locally.

	node server.js
	
You can now open the application on port 3000 at the URL: `http://localhost:3000/`

**Enjoy Your Digital Burger!**


