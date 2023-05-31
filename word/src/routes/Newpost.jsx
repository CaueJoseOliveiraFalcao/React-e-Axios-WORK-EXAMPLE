import React from 'react'
import styled from 'styled-components'
import blogFetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Newpost = () => {
  const navigate = useNavigate()
  const [title,setTitle] = useState()
  const [body,setBody] = useState()

  const createPost = async  (event) =>{
    event.preventDefault()
    const post = {title,body, userId : 1}

    await blogFetch.post("/posts" , {
      body : post
    })
    navigate("/")
  }
  return (
    <div>
      <Form onSubmit={(e) => createPost(e)}>
        <FormControl>
           <h2>Inserir Novo Post</h2>
          <Titulo htmlFor="titulo">Titulo</Titulo>
          <InputTitulo onChange={(e) => setTitle(e.target.value)} name='titulo' placeholder='Digite o Titulo aqui' type="text" />
          <Conteudo htmlFor="conteudo">Conteudo</Conteudo>
          <InputConteudo onChange={(e) => setBody(e.target.value)} name='conteudo' placeholder='Digite o Conteudo aqui'/>
          <Submit type='submit' value={'Criar Post'}/>
        </FormControl>
      </Form>
    </div>
  )
}
const Form = styled.form`

`;
const FormControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputTitulo = styled.input`
  width: 60%;
  padding: 1rem;
  border-radius: 5px;
  border-style: none;
`;
const Titulo = styled.label`
  margin: 1rem 0;
`;
const Conteudo = styled.label`
  margin: 1rem 0;
`;
const InputConteudo = styled.textarea`
    width: 60%;
    padding: 1rem;
    border-radius: 5px;
   border-style: none;
`;
const Submit = styled.input`
  padding: 1rem;
  width: 100px;
  margin: 1rem 0;
  background-color: transparent;
  border-radius: 5px;
  border-style: solid;
  color: white;
  cursor: pointer;
  border-color: white;
  transition: .3s;
  :hover{
    background-color: white;
    color: black;
  }
`;

export default Newpost