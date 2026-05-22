//JSX element:
const element1 = <h1 id="title" className="first">Hello Anand Shekhar</h1>
const element2 = <div>
    <h1>This is a damn good</h1>
    <h2>React Course</h2>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element1);