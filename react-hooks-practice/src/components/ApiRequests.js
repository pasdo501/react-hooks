import React, { useState, useEffect } from "react";

/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/

const postIds = [1, 2, 3, 4, 5, 6, 7, 8];

function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
}

function Post({ title, body, handleClick }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={handleClick}>Get Next</button>
    </div>
  );
}

function ApiRequests() {
  const [postIdIndex, setPostIdIndex] = useState(0);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPost(postIds[postIdIndex])
      .then((post) => setPost(post))
      .catch((error) => setError(true));

    return () => {
      setPost(null);
      setError(false);
    };
  }, [postIdIndex]);

  console.group("In Render");
  console.log(`Post ID index: ${postIdIndex}`);
  console.log(`Post:`);
  console.log(post);
  console.groupEnd();

  if (error) {
    return (
      <main style={{ textAling: `center` }}>
        There was an error. Reload the page and try again ...
      </main>
    );
  }

  return (
    <main style={{ textAlign: `center` }}>
      {post === null ? (
        <p>Loading ...</p>
      ) : (
        <Post
          key={post.id}
          title={post.title}
          body={post.body}
          handleClick={() => setPostIdIndex((i) => (i + 1) % postIds.length)}
        />
      )}
    </main>
  );
}

export default ApiRequests;
