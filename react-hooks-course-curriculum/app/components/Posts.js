import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'
import PostsList from './PostsList'

function postsReducer (state, action) {
  switch (action.type) {
    case 'fetch':
      return {
        posts: null,
        error: null,
        loading: true
      }
    case 'success':
        return {
          posts: action.posts,
          loading: false,
          error: null
        }
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      throw new Error("Invalid action type");
  }
}

export default function Posts ({ type }) {
  const [state, dispatch] = React.useReducer(
    postsReducer,
    { posts: null, error: null, loading: true }
  );

  React.useEffect(() => {
    dispatch({ type: 'fetch' })

    fetchMainPosts(type)
      .then((posts) => dispatch({ type: 'success', posts }))
      .catch(({ message }) => dispatch({ type: 'error', message }))
  }, [type])

  const { posts, error, loading } = state;

  if (loading === true) {
    return <Loading />
  }

  if (error) {
    return <p className="center-text error">{error}</p>
  }

  return <PostsList posts={posts} />;
}

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}