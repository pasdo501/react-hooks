import React, { useState, useEffect } from "react";

/*
  Instructions:
    Implement the `useFetch` function. 
*/

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setData(null);
        setError('Error fetching data');
        console.warn(error.message);
        setLoading(false);
      });
  }, [url]);

  return {
    loading,
    error,
    data,
  };
}

const postIds = [1, 2, 3, 4, 5, 6, 7, 8];

function UseFetch() {
  const [index, setIndex] = useState(0);

  const { loading, data: post, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
  );

  const incrementIndex = () => {
    setIndex((i) => (i === postIds.length - 1 ? i : i + 1));
  };

  if (loading === true) {
    return (
      <main style={{ textAlign: `center` }}>
        <p>Loading</p>
      </main>
    );
  }

  if (error) {
    return (
      <React.Fragment>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </React.Fragment>
    );
  }

  return (
    <main style={{ textAlign: `center` }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {index === postIds.length - 1 ? (
        <p>No more posts</p>
      ) : (
        <button onClick={incrementIndex}>Next Post</button>
      )}
    </main>
  );
}

export default UseFetch;
