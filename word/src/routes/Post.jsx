import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect , useState } from 'react';
import blogFetch from '../axios/config';
const Post = () => {
  const {id} = useParams();
  const [postAtual,setPostAtual] = useState(null)
  const getBodys = async () => {
    const response = await blogFetch.get(`/posts/${id}`)
    setPostAtual(response.data)
  }
  useEffect(() => {
    getBodys();
  } , [])

  return (
    <div>
      {/* Renderize o conteúdo do post */}
      { postAtual ? (
        <div key={postAtual.id}>
          <h1>{postAtual.title}</h1>
          <p>{postAtual.body}</p>
        </div>
      ) : (
        <p>Carregando</p>
      )}
      {/* Outros elementos da página */}
    </div>
  );
};

export default Post;