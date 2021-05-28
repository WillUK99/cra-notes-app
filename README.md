https://willuk99.github.io/cra-notes-app/

An app I made which I still use today to organise my web development learning, this is one of the first projects using React that I have created.

# Technologies
-HTML -SASS -JS/JSX -React (with hooks) -React Icons -Nanoid

## About

An application made to help me organise my web development journey aswell as tasks I am likely to forget in order to be more productive. The app saves all noted to local storage to allow a user to keep notes from a previous session, all notes are searchable with the search component I made for the app as well as a dark mode toggle.


Developing this project has given me a solid foundation as to how React 
works and why it is such a great tool for developers to use.

Wrapping my head around state and props took me a day or two to fully get 
my head around, as well as how hooks can be used to add state and allow for local 
storage of data. However once I had used React for a couple of days everything 
started to fall into place and I am extremely happy with how my skills are coming 
along already.

![image](https://user-images.githubusercontent.com/76099444/120035373-69a1bf00-bff6-11eb-96ae-08c223f4fedf.png)

## Walkthrough

App.js renders the header component of the app which contains the title of the app and also the theme toggler. 

![image](https://user-images.githubusercontent.com/76099444/120035918-41ff2680-bff7-11eb-8abb-2422319a1d05.png)


The theme toggler is set with a useState hook which is passed through the header component as a prop to allow the component to change the "setDarkMode" boolean state value.

![image](https://user-images.githubusercontent.com/76099444/120035846-24ca5800-bff7-11eb-8e8b-24af04a66383.png)

The next component below this is the SearchBox which passes the setSearchText hook prop to the component. This prop is then used in the component with a onChange event listener which when text is typed into the search area the state searchText state is updated accordingly. 

![image](https://user-images.githubusercontent.com/76099444/120036452-10d32600-bff8-11eb-93e6-09ab549f0d8b.png)

Then the NoteList component holds and renders all the notes within the notes state array. The notes list will filter through all current notes matched to the search box inputs.

![image](https://user-images.githubusercontent.com/76099444/120036762-86d78d00-bff8-11eb-9509-f22088edb879.png)

both the addNewNote and deleteNote functions are also passed through to the NoteList component. 

Within the NoteList component each Note component is then passed through with the id of each note to let React know where to update the DOM, aswell as the text, date and the handleDelete function which was passed from its parent component. 

![image](https://user-images.githubusercontent.com/76099444/120037230-2f85ec80-bff9-11eb-9fc1-b3269a4a21c8.png)


There is also an AddNote functional component which is passed the handleAddNote function allowing this component to add notes to the notes array to be rendered by the NoteList component.

![image](https://user-images.githubusercontent.com/76099444/120037498-a4f1bd00-bff9-11eb-8cff-87eb4ada4c99.png)


Finally each Note has its own component which has the following props id, text, date, handleDelete. 
A single function in this component allows for a note to be deleted and the state to be passed up and changed with an onClick event listener.

![image](https://user-images.githubusercontent.com/76099444/120037854-33663e80-bffa-11eb-8819-6f31d8070045.png)


### Thank you for reading 




---------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
