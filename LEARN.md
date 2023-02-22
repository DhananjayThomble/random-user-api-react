## Prerequisites
Before you start, you should have a basic understanding of HTML, CSS, JavaScript, and React. You should also have Node.js and npm (Node Package Manager) installed on your computer.

## Introduction
This project is a simple React app that uses the Random User API to fetch and display random user data in a Bootstrap card. The app consists of three components: App, MyCard, and MyImageCard.

## Getting started
1. To get started, create a new React app by running the following command in your terminal:

```bash
    npx create-react-app random-user-app
```
2. Change into the random-user-app directory and start the development server by running the following commands:
    
    ```bash
        cd random-user-app
        npm start
    ```

3. Open your browser and navigate to http://localhost:3000/. You should see the default React app.

## Fetching data from the API
1. In the `App.js` file, import the `useEffect` and `useState` hooks from React, as well as the `axios` library for making HTTP requests.

2. Add a `details` state variable using the `useState` hook. This will hold the user data fetched from the API.

3. Create an `async` function called `fetchDetails` that sends an HTTP GET request to the Random User API using `axios.get()`. Extract the first user object from the `data.results` array and set it to the `details` state using the `setDetails` function.

4. Call the `fetchDetails` function inside the `useEffect` hook to fetch user data when the component mounts.

## Creating the card components

1. Create a new file called `MyCard.js`. Import the `Card` component from Bootstrap and the `BiMap` and `BiPhone` icons from `react-icons/bi`.

2. Create a functional component called `MyCard` that takes in the `details` prop.

3. Use the `details` prop to display the user's picture, name, location, and phone number in the `Card` component.

4. Use the `BiMap` and `BiPhone` icons to display an icon next to the location and phone number.

5. Export the `MyCard` component.

6. Create a new file called `MyImageCard.js` Import the Card component from Bootstrap.

7. Create a functional component called `MyImageCard` that takes in the `details` prop.

8. Use the `details` prop to get the user's country from the `location` object.

9. Use the `countryflagsapi.com` API to construct a URL for the country flag image based on the user's country.

10. Display the flag image in the `Card` component using an `img` tag with the `src` attribute set to the flag image URL.

11. Set the `crossOrigin` attribute of the `img` tag to `"anonymous"` to allow the image to be loaded from a different domain.

12. Export the `MyImageCard` component.

## Adding the components to App.js

1. In `App.js`, import the `Container`, `Row`, and `Col` components from Bootstrap, as well as the `MyCard` and `MyImageCard` components.

2. Create a container component with two columns. Each column should contain a `MyCard` and `MyImageCard` component, respectively.

3. Pass the `details` state to the `MyCard` and `MyImageCard` components as a prop.

## Conclusion
This project provides a basic understanding of how to make API calls and render data in a React application. It covers the usage of useState and useEffect hooks, as well as the integration of Bootstrap components for styling. The project retrieves user information from a random user API and displays it in two separate cards.

Moreover, it also demonstrates the usage of the axios library for making HTTP requests and rendering images from external APIs using the cross-origin attribute.

This project is a good starting point for beginners who want to learn React and API integration. However, there is always room for improvement and further development.
By working on this project, learners can develop their skills and gain more confidence in their abilities.








