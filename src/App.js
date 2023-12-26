// import "./App.css";

// import { useState } from "react";

// function App() {
//   // let name = "Sithu Soe";
//   // Use State
//   let [name, setName] = useState("Sithu Soe"); //useState gives getter and setter
//   let [posts, setPosts] = useState([
//     {
//       id: 1,
//       title: "First Post",
//       body: "This is post 1",
//     },
//     {
//       id: 2,
//       title: "Second Post",
//       body: "This is post 2",
//     },
//     {
//       id: 3,
//       title: "Third Post",
//       body: "This is post 3",
//     },
//   ]);

//   let changeName = () => {
//     // name = "Kyaw Kyaw";
//     setName("Kyaw Kyaw");
//   };

//   return (
//     <div className="App">
//       <h1>Hello, {name}</h1>

//       <button onClick={changeName}>Change Name</button>

//       <h1>Posts</h1>
//       <ul>{posts.map((posts) => (
//         <li key={posts.id}>{posts.title}</li>
//       ))}</ul>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h3>Count - {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
