import "./App.css";

import { useState } from "react";
import Navbar from "./components/Navbar/index";
import PostsList from "./components/PostsList/index";
import Modal from "./components/Modal";

function App() {
  let [showModal, setShowModal] = useState(false);

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
      <Navbar setShowModal={setShowModal} />

      <PostsList posts={posts} />

      {showModal && (
        <Modal>
          <h1>Zoom class is avaliable now!</h1>

          <p>
            feel free to <a href="">join</a> here.
          </p>

          <button onClick={()=>setShowModal(false)}>Close</button>
        </Modal>
      )}
    </>
  );
}

export default App;
