import "./App.css";

import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostsList/index";

function App() {
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

  return (
    <>
      <Navbar />

      <PostsList posts={posts} /> 
    </>
  );
}

export default App;
