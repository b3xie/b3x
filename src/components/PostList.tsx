import _React, { useEffect, useState } from "react";

const names: { nome: string; message: string }[] = [
  {
    nome: "Sarah",
    message: "bucetossauros rex",
  },
  {
    nome: "Caterpi",
    message: "pipipipippipi",
  },
  {
    nome: "Max",
    message: "Bex :3",
  },
];

function PostList() {
  const [posts, setPosts] = useState([] as any[]);
  const fetchPosts = () => {
    fetch("https://guestbookapi.vercel.app/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <>
      <section className="flex flex-col space-y-4">
        {posts.map((post) => {
          return (
            <div className="flex flex-col bg-bexdark w-auto min-w-[200px] p-3">
              <div className="">
                <h2 className="text-bexpurplemedium">{post.name}:</h2>
              </div>
              <div className="">
                <h2 className="text-bexpurplelight">{post.post}</h2>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default PostList;
