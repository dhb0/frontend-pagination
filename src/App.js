import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import PostDisplay from "./Components/PostDisplay";
import Pagination from "./Components/Pagination";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [currentPag, setCurrentPag] = useState(0);
  const [loading, setLoading] = useState(true)
  const getPosts = async (e) => {
    e.preventDefault();
    const result = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => {
        setPosts(
          new Array(Math.ceil(result.data.length / 10))
            .fill()
            .map((_) => result.data.splice(0, 10))
        );
        setLoading(false)
      });
  };
  useEffect(()=> {
    setPagination(posts.length);
  }, [posts])

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={getPosts}>
        Get Posts
      </button>
      <PostDisplay posts={posts} currentPag={currentPag} loading={loading} />
      {pagination !== 0 && (
        <Pagination
          currentPag={currentPag}
          pagination={pagination}
          setCurrentPag={setCurrentPag}
        />
      )}
    </div>
  );
};

export default App;
