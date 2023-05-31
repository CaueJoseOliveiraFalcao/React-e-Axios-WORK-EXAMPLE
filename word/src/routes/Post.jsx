import React from 'react';
import { useParams } from 'react-router-dom';
const Post = () => {
  const {id} = useParams(); // Obtenha o valor do ID da rota
  // Use o ID para buscar o conteúdo do post no backend ou em algum outro lugar
  // ...

  return (
    <div>
      {/* Renderize o conteúdo do post */}
      <h1>Post ID: {id}</h1>
      {/* Outros elementos da página */}
    </div>
  );
};

export default Post;