import React from 'react'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import blogFetch from '../axios/config'
const Home = () => {
  const [posts, setPosts] = useState([]) 
  const getPosts = async () => {
    try {
      const response = await blogFetch.get("/posts")
      const data = response.data
      setPosts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  } , [])

  return (
    <div>
      <p>Ultimas postagens</p>
      {posts.length === 0 ? (<p>Carregando...</p>): (
        posts.map((post) => (
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}>Ler Post</Link>
          </div>
        ))
      )}
    </div>
    
  )
}

export default Home