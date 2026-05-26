// without using Babel, we cannot write JSX code in our React application.
// We have to use React.createElement() method to create the elements in our React application. 
// But with the help of Babel, we can write JSX code in our React application
// and it will be transpiled to JavaScript code that can be understood by the browser.

//Section 1: JSX
//What is JSX?
//JSX stands for JavaScript XML. It is a syntax extension for JavaScript 
//that allows us to write HTML-like code in our JavaScript code. 
//It is used to create React elements in our React application.
//JSX element:

const element1 = <h1 id="title" className="first">Hello Anand Shekhar</h1>
// const element = React.createElement('h1', {id: 'title', className: 'first'}, 'Hello Anand Shekhar');
// |---> This is the equivalent JSX code for the above React.createElement() method.


const element2 = (<div>
<h1>This is a damn good</h1>
<h2>React Course</h2>
</div>); 

//for element2, the above JSX code will be transpiled to the following JavaScript code by Babel:
/*
React.createElement('div', null,
    React.createElement('h1', null, 'This is a damn good'),
    React.createElement('h2', null, 'React Course')
);
*/


//Example ofInvalid JSX element:
/*
const element3 = 
(<h1> This is london<h1>
<h2> This is what British had come from </h2>)
It would transpiled as:
React.createElement(h1, null, 'This is london<h1><h2>This is what British had come from</h2>');
*/




//Most important declaration in our React application 
//because it is used to create the root of our React application 
// and it is used to render the elements in our React application.
const root = ReactDOM.createRoot(document.getElementById('root'));
//The 'root' in document.getElementById('root') comes directly from the HTML file
//that accompanies your JavaScript code.
//By doing this, We are telling React: "Hey, see this empty div in the HTML? 
//This is your home now. Inject all of our React components and JSX elements right inside it."




root.render(element1);



//Section 2: React Component
//What is React Component?
//A React component is a function that returns a React Element(also known as JSX element).
//It is a reusable piece of code that can be used to create multiple elements in our
//React application.
//Note: First letter of the component name should be in capital letter, 
// otherwise it will be treated as a HTML element by React and it will not work as expected.
//Example of a React Component:
function MyComponent() {
    return <h1>This is a React Component</h1>;
};
//The above code is a React Component that returns a JSX element.
//We can use this component in our React application like this:

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(MyComponent());//Method-1: This is not the recommended way to render a React Component in our React application.
root.render(<MyComponent />);//Method-2: This is the recommended way to render a React Component in our React application.


function App_return_normal_component(name) {
    return <h1>This is {name} React Component</h1>;
  //return <h1>Add 10 and 20 is {10 + 20}</h1>; // Add 10 and 20 is 30.
}


const object =  {
    name: "Anand Shekhar",
    age: 24,
    city: "Bangalore"
};

function App2_return_object(object){ 
    return {object}; // will throw an error because we cannot return an object in a React Component.
}

function App3_return_text(){
    return "This is a text element"; // will render but not visible on the screen because it is a string.
}


//Example of element:
const isLoggedIn = true;
const element3 = <h1>{isLoggedIn ? "Welcome back!" : "Please sign up."}</h1>;
root.render(element3);

//Any JavaScript expression can be used inside the JSX code by wrapping it in curly braces {}.
//Text/elemenet
//Number, String, --> would render but Visible on the screen.
//Boolean(false,true), null, undefined --> would render but Not visible on the screen.
//Object --> It will throw an error.
//can be used inside the JSX code by wrapping it in curly braces {}.


//Example of array:
const ex_array = ["vinegar", "salt", "pepper"];
const array_list_view_in_react = 
(<ul>
    {ex_array.map(C=><li>{c}</li>)} 
</ul>
);
root.render(array_list_view_in_react);


//Example of function:
const a = App_return_normal_component("Anand Shekhar");
root.render(a);

//Example-2:
const Age = 24;
const element = <h1>You are : {Age>18 ? "Adult":"Teenager."}</h1>
root.render(element);
//-----




//Section-03: React Component with Props
function App_with_props(props){
    return <h1>I am {props.name} and my age is {props.age}.</h1>
}


const p = <App name="Anand" age={24}></App>
root.render(p);


//How to use style in React Component?
const ab = {color: "red", fontSize: "24px"};
const element_with_style = <h1 style={ab}>This is a styled element</h1>;  
root.render(element_with_style);



//Minor Project:

function Header(){
    <h1>Welcome to Coder Army</h1>
}

function App_project(){
    <Header></Header>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App_project/>);

//A single web page has a header, a main section with some content, and a footer.
//The header should display the title of the page, 
//the main section should display some text content,
//and the footer should display the copyright information.

//Solution:

function Header(){
    return <h1>Welcome to Coder Army</h1>
}
function Main(){
    return <p>This is a React course for beginners.</p>
}
function Footer(){
    return <p>Copyright 2024 Coder Army</p>
}

function App_project(){ //This is the na
    return (
        <div>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
    //or
    // return (     //Mostly this is used.
    //     <>
    //         <Header></Header>
    //         <Main></Main>
    //         <Footer></Footer>
    //     </>
    // );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App_project/>);