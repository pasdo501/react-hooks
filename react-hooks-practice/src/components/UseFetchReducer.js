import React from "react";

/*
  Instructions:
    Refactor `useFetch` to use `useReducer` instead of
    `useState`.
*/

function fetchReducer(state, action) {
    switch(action.type) {
        case 'attemptFetch':
            return {
                ...state,
                loading: true
            }
        case 'success':
            return {
                loading: false,
                data: action.data,
                error: null
            }
        case 'error':
            return {
                ...state,
                loading: false,
                error: 'Error fetching data. Try again.'
            }
        default:
            throw new Error('Invalid action used')
    }
}

const initialState = {
    loading: true,
    data: null,
    error: null
}

function useFetch (url) {
    const [state, dispatch] = React.useReducer(
        fetchReducer,
        initialState
    )

  React.useEffect(() => {
    dispatch({ type: 'attemptFetch' })

    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'success', data }))
      .catch((e) => {
        console.warn(e.message)
        dispatch({ type: 'error' })
      })
  }, [url])


  return state;
}

const postIds = [1,2,3,4,5,6,7,8]

function UseFetchReducer() {
  const [index, setIndex] = React.useState(0)

  const { loading, data: post, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
  )

  const incrementIndex = () => {
    setIndex((i) => 
      i === postIds.length - 1
        ? i
        : i + 1
    )
  }

  if (loading === true) {
    return <p>Loading</p>
  }

  if (error) {
    return (
      <React.Fragment>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </React.Fragment>
    )
  }

  return (
    <main style={{ textAlign: `center` }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {error && <p>{error}</p>}
      {index === postIds.length - 1 
        ? <p>No more posts</p>
        : <button onClick={incrementIndex}>
            Next Post
          </button>}
    </main>
  );
}

export default UseFetchReducer;
