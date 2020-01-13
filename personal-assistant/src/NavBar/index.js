import React from 'react'
import { StyledLink, NavBarList } from './styles'

const NavBar = () => (
  <NavBarList>
    <StyledLink to="/Home">
        Home
    </StyledLink>
    <StyledLink to="/AllTasks">
        Tasks
    </StyledLink>
    <StyledLink to="/Calendar">
        Calendar
    </StyledLink>
  </NavBarList>
)


export default NavBar
