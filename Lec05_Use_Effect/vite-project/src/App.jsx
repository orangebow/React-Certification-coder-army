import { useEffect, useState } from "react";

function App_demo_one(){
  const [users, setUsers] = useState([]); 
  //The code written under the useEffect is executed in the last. That's why they are called side-effect hooks. 
  const[name, setName] = useState(""); // for user input as text.
  const[count, setCount] = useState("");

 
  useEffect(() => {
    async function GithubProfile(){
      //const response = await fetch("https://api.github.com/users");
      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      
      // 1. Log the data to see what GitHub is actually sending you
      console.log("GitHub API Response:", data); 

      // 2. Safety Check: Only set the state if GitHub actually sent an array
      if (Array.isArray(data)) {
        setUsers(data);// Important line.
      } else {
        console.error("Uh oh! GitHub didn't send an array. You might be rate-limited.");
      }
    } 
    GithubProfile();
  }, []); 

  function handleChange(e){
  //console.log(e.target.value); // e is an event object.
  setName(e.target.value.toUpperCase());
  
  }
  
  return (
    <>
    <h1>Github User</h1>
   <input type="text" value={name} onChange={handleChange}></input>
    <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}> </input>
    <div style={{display:"flex" , justifyContent:"center", alignItems:"center", flexWrap:"wrap" }}>
    {
      // The map function is now safe because users will ALWAYS be an array
      users.map(user => (
        <img key={user.id} src={user.avatar_url} height={"100px"} width={"100px"} alt="avatar" />
      )) 
    }
    </div>
    
    </>
  )
}

export default App_demo_one;