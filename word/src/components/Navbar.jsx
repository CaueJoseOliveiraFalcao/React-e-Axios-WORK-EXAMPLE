import React from 'react'
import { Link } from 'react-router-dom'

//styled compoents
import styled from "styled-components"
const Ul = styled.ul`
   list-style: none;
   display: flex;
   align-items: center;


`
const A = styled.a`
    text-decoration: none;
    color: white;
    opacity: 0.7;
    transition: .3s;
    padding: 0;
    margin: 0;
    cursor: pointer;
     :hover{
        opacity: 1;
    }
`
const Li = styled.li`
    text-decoration: none;
    margin: 0rem 1rem;
`
const Nav = styled.nav`
padding: 0;
margin: 0;
`
export const Navbar = () => {
  return (
    <Nav className="navbar">
        <h2 style={{margin : '0'}}>
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
    </Nav>
  )
}
