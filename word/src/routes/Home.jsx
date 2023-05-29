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
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts();
  } , [])

  return (
    <p>home</p>
  )
}

export default Home