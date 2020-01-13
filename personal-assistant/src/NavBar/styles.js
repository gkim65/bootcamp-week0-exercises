import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Use pointer-events in order to have the child trigger the parent
export const StyledLink = styled(Link)`
  color: grey;
  font: ${({ theme }) => theme.fonts.headerNotBold}; 
  margin: 0px 30px;
  text-decoration: none;
  pointer-events: auto;
  transition:all 0.15s linear;
  &:hover {
    font: ${({ theme }) => theme.fonts.header};
    color: white; 
    }
`


export const NavBarList = styled.div`
  padding: 10px 0px; 
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition:all 0.3s linear;
  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    opacity: 80%;
  }
`
