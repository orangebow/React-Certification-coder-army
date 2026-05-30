import { useState } from "react";

function App(){
  
  const [users,setUsers] = useState([]); // to render the app. 
  // We also passed the empty array beacuse the data is recieved in the form of array.

  async function GithubProfile(){
    const response = await fetch("https://api.github.com/users");
    const data = response.json();
    //console.log(data);
    setUsers(data);
  } 

  GithubProfile();
  return (
    <>
    <div style={{display="flex" , justifyContent="center", alignItems="center", flexWrap = "wrap" }}>
    <h1>Github User</h1>
    </div>
    </>
  )
}

export default App;