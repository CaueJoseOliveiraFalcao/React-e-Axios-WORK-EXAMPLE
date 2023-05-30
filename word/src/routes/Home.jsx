import React from 'react'
import { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
const Home = () => {
  const [posts, setPosts] = useState([]) 
  const getPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
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
            <Link to={`/post/${post.id}`}></Link>
          </div>
        ))
      )}
    </div>
    
  )
}

export default Home