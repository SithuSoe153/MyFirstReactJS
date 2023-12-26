import "./App.css";

import { useState } from "react";

function App() {
  // let name = "Sithu Soe";
  // Use State
  let [name, setName] = useState("Sithu Soe"); //useState gives getter and setter
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      body: "This is post 1",
    },
    {
      id: 2,
      title: "Second Post",
      body: "This is post 2",
    },
    {
      id: 3,
      title: "Third Post",
      body: "This is post 3",
    },
  ]);

  let changeName = () => {
    // name = "Kyaw Kyaw";
    setName("Kyaw Kyaw");
  };

  let deletePost = (id) => {
    // console.log(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <h1>Hello, {name}</h1>

      <button onClick={changeName}>Change Name</button>

      <h1>Posts</h1>
      <ul>
        {!!posts.length &&
          posts.map((posts) => (
            <li key={posts.id}>
              {posts.title}
              <button onClick={() => deletePost(posts.id)}>Delete</button>
            </li>
          ))}
        {!posts.length && <li>No posts yet</li>}
      </ul>
    </div>
  );
}

export default App;
