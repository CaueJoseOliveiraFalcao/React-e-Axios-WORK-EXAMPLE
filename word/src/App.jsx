import { Outlet } from "react-router-dom"
import { Navbar } from "./components/Navbar"
//styled compoents
import styled from "styled-components"

const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 2rem;
  height: 100%;

`

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Container>
       <Outlet/>
     </Container>
    </div>
  )
}

export default App
