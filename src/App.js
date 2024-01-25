import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import PostLists from "./components/PostLists";
import Modal from "./components/Modal";

function App() {
  let [showModal, setShowModal] = useState(false);

  let [posts, setPosts] = useState([
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
    { id: 4, title: "Post 4" },
    { id: 5, title: "Post 5" },
    { id: 6, title: "Post 6" },
    { id: 7, title: "Post 7" },
    { id: 8, title: "Post 8" },
    { id: 9, title: "Post 9" },
  ]);

  return (
    <>
      <Navbar setShowModal={setShowModal} />

      {showModal && (
        <Modal>
          <h1>PHP Zoom Class is started!</h1>
          <p>
            Feel free to <a href="#">join</a> here
          </p>

          <h6>
            <a href="">Terms and condition</a>
          </h6>

          <button onClick={()=>setShowModal(false)}>Close</button>
        </Modal>
      )}

      <PostLists posts={posts} />
    </>
  );
}

export default App;
