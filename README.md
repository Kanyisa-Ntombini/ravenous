# Ravenous

## Description

This project was created by the amazing team at [Codecademy](https://www.codecademy.com/learn) for learners to use as their portfolio project. This is a restaurant recommendation website that allows users to search for local businesses based on their location and keywords.

## How to use

- Please follow [this link](https://ravenous-888.netlify.app/) to view the project
- Alternatively, please fork the project and then clone it on your computer
- Start the react server by running `npm start`

## Technologies used

- HTML/CSS
- JavaScript
- React
- Yelp API

## Important links:

- Yelp API: https://docs.developer.yelp.com/reference/v3_business_search

## Image Credits

I would like to thank the following creators for the images used in this project:

### Flaticon for icon on the webpage tab

<img src="./public/dish.png" width="100" height="100" />

- If you would like to use this image please use following [this link](https://www.flaticon.com/free-icons/food).

### Jimmy Dean for the header picture

<!-- <img src="./src/components/App/food.jpg" width="100" height="100" /> -->

If you would like to use this image please use following [this link](https://unsplash.com/photos/assorted-fruits-on-brown-wooden-bowls-Yn0l7uwBrpw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash).

### Brooke Lank for this food image

<!-- <img src="./src/components/Business/food-business-image-1.jpg" width="100" height="100" /> -->

- If you would like to use this image please use following [this link](https://unsplash.com/photos/sandwich-with-boiled-egg-fdlZBWIP0aM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash).

## Instructions:

### Part3

1.  The SearchBar component should reflect the changes in state when the user interacts with it.

Modify your SearchBar component so that it manages the state for the following inputs:

The search term located in the search input
The location to search near from the location input
The selected sorting option to use

2.  Currently, the sort options located above your input elements lack visual cues to indicate when a user selects one of them. They maintain the same appearance, and it is impossible to discern which option has been chosen.

Fix this by creating an event handler that handles the user’s click event. It should modify the visual style of the selected option to indicate that it is active.

3.  Ravenous will need to handle changes in the search terms.

Add event handlers for users making changes to the search terms. Once a user begins typing, the input element should update to reflect the text typed into the respective input element.

4.  Ravenous will need to handle changes in the location search.

Add event handlers for users making changes to the location search. Once a user begins typing, the input element should update to reflect the text typed into the respective input element.

5.  The search button also needs to provide some sort of feedback to the user. Currently, clicking on it doesn’t do anything. Let’s build the functionality that simulates what a search might look like.

Every search will use three pieces of information, the search term, the location, and the selected sort option. For now, create an event handler that logs an example message to the console such as:

"Searching Yelp with Pizza, Brooklyn, best_match"

It should log this message every time the search button is pressed.

6.  Verify and validate the behavior of your application to ensure that everything is functioning as intended.

Check if you are receiving visual feedback when clicking through the sorting options at the top of the search bar to show which option is selected. Additionally, open the developer tools in your browser and enter a business name and city into the search bar. Click the search button and check if there is any output in the console.

7.  Let’s briefly review what you’ve accomplished. In this project, you:

Added visual feedback for sorting options at the top of the search bar
Set the state of sorting options and input elements
Simulated a search query with the search button
Your project is shaping up! Reflect on the knowledge you used in this project and consider the following question:

How can we interact with the Yelp API using the search button?
After you’re done with your project, visit our forums to compare your project to our sample solution code. Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.

### Part 4:

1.  It’s time to start on the Yelp API functionality. Create a utils folder in the src directory—this is where you’ll store the JavaScript interacting with the Yelp API.

Inside, create a JavaScript file for your Yelp API code.

2.  Retrieve your Yelp API credentials to use the Yelp API.

Navigate to the “Manage App” section of the documentation page.

Create a new app and fill out the required fields for your app. Agree to the terms and conditions and create the app.

Then, copy the API key, and at the top of the file containing your API logic, store the API key in a constant.

3.  Throughout the rest of this project, we will use the fetch() browser API to make our requests.

Since fetch() is a browser API, older browsers may not support it. To increase the accessibility of Ravenous to a wider audience of users, we’ll need to add a fetch() polyfill to support older browsers.

Within the Ravenous directory in your terminal, run npm install whatwg-fetch --save to install the whatwg-fetch polyfill and add it to your package.json file.

4.  Create a module to retrieve business listings from the Yelp API using a search function. The module should contain a function that retrieves business listings based on three parameters: search terms, location, and sort by option.

The search function should send a GET request to the Yelp API and process the response to extract the relevant information about each business.

The function should resolve to an array of business objects with the information retrieved from the response.

5. If your fetch() method works as intended, you can skip this step. If you are seeing errors with your fetch() method, it may not be working properly due to CORS restrictions.

You can bypass this restriction with an API called CORS Anywhere. CORS Anywhere will take requests sent to its API endpoint, make them for the requesting app with the proper CORS permissions, and then return the response back to the requesting app.

In your own browser, visit https://cors-anywhere.herokuapp.com/corsdemo and click “Request temporary access to the demo server”

Back in your code, prepend the URL path you passed to the first argument in fetch() with the following:

6.  Return to your Business and BusinessList components to refactor them to work with the data returned by the Yelp API call.

First, ensure that every list item rendered by a React component has a unique key. Within your components, identify locations where a unique key can be assigned.

Second, check your project thoroughly for any instances where you might have embedded fixed data and eliminate them, adapting the code to function appropriately with actual data.

7.  Update your search button so that it no longer displays the search data in the console. Instead, modify it to send the user’s data to the module defined previously to retrieve data from the Yelp API.

The search button should query the Yelp API for real businesses and pass down the returned list of businesses. Test it by querying for a few different types of restaurants and zip codes to ensure it works as expected.

8.  Test often and test early. Testing frequently during the development process can help you identify issues and bugs sooner, making them easier and less time-consuming to fix. Wrap up your project by testing and debugging each component.

Identify the components and functionalities of your project that need to be tested.
Create test cases
Execute the test cases
Identify any issues or bugs that need to be fixed
Implement your fix and perform a final test to ensure that all components and functionalities of your project are working as expected

9.  Congratulations! You’ve completed the Ravenous project.

You’ve come a long way. Let’s once again review what you’ve accomplished:

You removed business information that was hardcoded in your project.
You developed a module that allows for communication with the Yelp API.
You were able to retrieve valuable information from the Yelp API and present it to the user through the interface.
You thoroughly tested and debugged your project.
Over the course of this project, you utilized the React library, imported and exported components, fetched data from the Yelp API, and more to achieve a fully functioning Yelp-like clone.

You should be proud of how far you’ve come. Visit our forums to compare your project to our sample solution code. Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.

As you continue towards your goal of building front-end web apps, you’ll continue to use many of these foundational skills as you learn more challenging and advanced concepts.

10. This card is optional, but we suggest that you push your React knowledge by adding additional features to Ravenous. This will allow you to not only reinforce your new skills but create something unique and exciting in the process.
