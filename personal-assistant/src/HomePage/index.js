import React from 'react'
import {
  Title1, Title2, Title3, Title4, Title5, Title6, TitleBox, Container, Title7,
} from './styles'
import NavBar from '../NavBar'

const HomePage = () => (
  <div>
    <Container>
      <TitleBox>
        <Title1>H</Title1>
        <Title2>e</Title2>
        <Title3>l</Title3>
        <Title4>l</Title4>
        <Title5>o</Title5>
        <Title7>!</Title7>
      </TitleBox>
      <Title6> Let's get something done today.</Title6>
      <NavBar />
    </Container>
  </div>
)


export default HomePage
