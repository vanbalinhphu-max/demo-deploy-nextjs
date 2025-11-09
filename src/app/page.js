import Image from "next/image";
import styles from "./page.module.css";
import StoreProvider from "./StoreProvider";
import PostsList from "./PostsList";

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!res.ok) {
    throw new Error('Failed to fetch posts')
  }

  return res.json();
}

export default async function Home() {
  const inititalPosts = await fetchPosts();

  return (
    <StoreProvider>
      <main>
        <h1>Welcome to Posts App</h1>
        <PostsList initialPosts={inititalPosts}/>
      </main>
    </StoreProvider>
  );
}
