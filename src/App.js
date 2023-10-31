import { useEffect, useRef, useState } from "react";
import "./styles.css";
import Post from "./components/post";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const source_url = "https://jsonplaceholder.typicode.com/posts?userId=1";
    setLoading(true);
    async function getPosts() {
      const response = await fetch(source_url);
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    }

    setTimeout(() => {
      getPosts();
    }, 1000);
  }, [query]);

  return (
    <div className="App">
      <h1>Recent Posts</h1>
      {loading ? (
        <h3 className="loading">Loading...</h3>
      ) : (
        posts.map((post) => <Post key={post.id} post={post}></Post>)
      )}
    </div>
  );
}
