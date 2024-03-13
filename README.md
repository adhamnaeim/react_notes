# React Frontend only notes app
the goal from this project to illustrate my capabilities of developing react applications

the following was learnt through the processing mimicking [Dennis Ivy's project](https://www.youtube.com/watch?v=6fM3ueN9nYM):
- starting a react project from scratch
- removing boilerplate files and code
- understanding the file structure of a react project
- understanding and building parent/child components
- accessing hardcoded json files using props (rendered immutably)
- the usage of useParams to fetch dynamic link parameters
- installing and using react-router-dom for creating routers and dynamic links in JSX (similar to href)
- the usage of ternary operator(?) and logical AND operator (&&)
- adding css styling and adding svg icons to app as a react either a standalone or an embedded component
- usage of json-server for mimicking backend API requests
- switching from fetching data from static immutable records to using CRUD operations on a json db.
- usage of setNavigate that redirects the user based on the component's functions needs.
- usage of useState and useEffect hooks for dealing with API requests asynchronously

## Running app in development

### 1. `npm install`
this will ensure the download of all the needed dependencies needed for react\
and the json-server used to mimick the backend based on the package.json config file.

### 2. `npm run server`
crucial step for running the json server that's responsible for handling the api calls
with the db.json file.\
json server is running on http://localhost:1337

### 3.`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## running app in production

### 1. `npm install`
this will ensure the download of all the needed dependencies needed for react 
and the json-server used to mimick the backend based on the package.json config file.

### 2.`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### 3. `npm install -g serve`
serving the production build locally

### 4. `npm run server`
crucial step for running the json server that's responsible for handling the api calls
with the db.json file.\
json server is running on http://localhost:1337

### 5. `serve -s build -p 5000`
running the production build on http://localhost:5000
