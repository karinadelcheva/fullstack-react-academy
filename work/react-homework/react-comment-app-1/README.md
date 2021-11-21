# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Building a React Comments Client Side Application using TypeScript


Implement a client side (browser) application using ReactJS and TypeScript (Single Page Application - SPA), which keeps the data in Window.localStorage, with following functionality:

For each individual Comment there is stored following information:

comment identifier - a unique positive number
comment title (up to 80 characters)
comment content (up to 512 characters)
comment status (active or suspended)
time of creation (generated automatically)
time of last modification (generated automatically)
The comment content should support Markdown syntax: https://commonmark.org/help/

The application should allow following functionality:

- Adding new comment (no security restrictions in this version). (10 точки)
- Browsing all comments with their status, as well as possibility to filter the comments according to their status, sorted in descending order by their last modification date. (20 точки)
- Aside to each comment are shown two buttons allowing deleting and editing the corresponding comment. For editing you can reuse the form for comment creation. (20 точки).
- Aside to each comment are shown also two radio-buttons allowing to change the corresponding  comment's status. (10 точки).
Максимален брой точки: 60.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
