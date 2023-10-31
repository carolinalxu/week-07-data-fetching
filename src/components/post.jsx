import React, { useEffect, useState } from "react";

export default function Post({ post }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user_url = `https://jsonplaceholder.typicode.com/users/${post.userId}`;

    async function getUser() {
      const response = await fetch(user_url);
      const data = await response.json();
      setUser(data);
    }

    getUser();
  }, [post.userId]);

  return (
    <div className="post-box">
      <span className="title">{post.title}</span>

      {user && (
        <div className="user-info">
          <p>
            <span>By </span>
            <a
              href={`https://www.example.com/${user.username}`} // Replace with a valid URL
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.name}
            </a>
          </p>
          <p>Email: {user.email}</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
