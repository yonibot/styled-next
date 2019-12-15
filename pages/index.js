import React from 'react'
import styled from 'styled-components'

const Header = styled.h1`
  color: blue;
  font-family: arial;
  &:after {
    content: "💅";
  }
`

const Home = () => (
  <div>
    <Header>Hello Styled Components!</Header>
  </div>
)

export default Home
