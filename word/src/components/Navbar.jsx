import React from 'react'
import { Link } from 'react-router-dom'

//styled compoents
import styled from "styled-components"
const Ul = styled.ul`
   list-style: none;

`
const A = styled.a`
    text-decoration: none;
    color: white;
    opacity: 0.7;
    transition: .3s;
    cursor: pointer;
     :hover{
        opacity: 1;
    }
`
const Li = styled.li`
    text-decoration: none;
`
export const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link style={{textDecoration: 'none'}} to={'/'}><A>Blog</A></Link>
        </h2>
        <Ul>
            <Li>
                <Link style={{textDecoration: 'none'}} to={'/'}><A>Home</A></Link>
            </Li>
            <Li>
                <Link style={{textDecoration: 'none'}} to={'/new'}><A>Novo post </A></Link>
            </Li>
        </Ul>
    </nav>
  )
}
