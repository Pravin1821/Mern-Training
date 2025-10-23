import React, { use } from 'react'
import { useState , useEffect} from 'react'

function Effect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('Effect ran');
    });
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
        setUser(data); 
      })
        .catch(error => console.error("Error fetching user data:", error));
        
    }, []);

   if (!user) {
    return <div>Loading user data...</div>;
   }
    
  return(
    <div>
      <h2>Effect Hook Example</h2>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <h2>User Information</h2>
        <ul>
          {user.map((usr) => (
            <li key={usr.id}>
              <p>Name: {usr.name}</p>
              <p>Email: {usr.email}</p>
              <p>Phone: {usr.phone}</p>
            </li>
          ))}
        </ul>

    </div>
  );
}

export default Effect

