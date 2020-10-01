import React from "react";

const PostDisplay = ({ posts, currentPag, loading }) => {
  console.log(posts[currentPag]);
  return (
    <div>
      {!loading ? (
        posts[currentPag].map((item, index) => (
          <h3 key={index}>{item.title}</h3>
        ))
      ) : (
        null
      )}
    </div>
  );
};

export default PostDisplay;
