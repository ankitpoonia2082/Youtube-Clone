This is Youtube Clone app made in React during learning React.
Developed by : Ankit Poonia

Tech Stack used :- 1. React (JSX) 2. React Router 3. Redux

# Getting Started with this YouTube Clone React App

## Available Scripts

In the project directory, you can run:

### `npm i` :- To install required npm packages.

### `npm start` :- To run server (port no 3000 by default).

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

Day 1 :- Made homepage with real data using google youtube Api.
Made header with a collapsible sidebar with link component which takes you to other section of application.
Made a page to view video, used youtube embed to view video and get rendered data related to video (name, likes, views etc);

Day 2 :- Made comments section with live data, nested comments are not avlabel because of youtube api limitations.
Made search suggestion , when user types in searchbox it shows suggestion from api data called using "Debounsing" to prevent unnessery api calls.
Made cache for search suggestions, storing suggestion data into store to improve performance of application search.

Day 3 :- Made filters and search videos working , made live videos container, Watch live page with live chat using Long poling / Api Poling (Youtube don't provide api for live chat so I made random name and random string generator functions which give live chat like data to render in live chat ), and made send chat in live.

// This project is completed with main features working , there will be some minor bugs and responsive ui issues which will be fixed later.
