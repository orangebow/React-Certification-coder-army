import { useEffect, useState } from "react";

function App_demo_count() {
  const [users, setUsers] = useState([]); 
  const [count, setCount] = useState(30);
  // Separate state to hold the actual count we want to fetch
  //const [triggerCount, setTriggerCount] = useState(30);

  useEffect(() => {
    async function GithubProfile() {
      // Use triggerCount here instead of count
      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      
      console.log("GitHub API Response:", data); 

      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        console.error("Uh oh! GitHub didn't send an array. You might be rate-limited or hit an error.");
      }
    } 
    GithubProfile();
  }, [count]); 

  return (
    <>
      <h1>Github User</h1>
      <input 
        type="number" 
        value={count} 
        onChange={(e) => setCount(parseInt(e.target.value) )} 
      />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: "20px" }}>
        {users.map(user => (
          <img key={user.id} src={user.avatar_url} height={"100px"} width={"100px"} alt="avatar" style={{ margin: "5px" }} />
        ))}
      </div>
    </>
  );
}

export default App_demo_count;