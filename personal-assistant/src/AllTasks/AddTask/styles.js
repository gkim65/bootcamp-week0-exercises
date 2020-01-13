import styled from 'styled-components'

// Input places for stuff like search bars
export const Input = styled.input`
    font-family: ${props => props.theme.fonts.header.family};
    font-weight: ${props => props.theme.fonts.header.weight};
    width:100%;
    height: 20px;
    background-color: #FBF0D9;
    margin-right: 10px;
    border-radius: 5px;
`
// Container for the Input search bar places
export const ContainerInput = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    margin:auto;

`

// Container for the green yellow red buttons
export const ContainerButtons = styled.div`
    width: 350px;
    border-radius: 10px;
    height: 60px;
    display: flex;
    align-items: center;
    margin:auto;

`

// container for everything
export const Container = styled.div`
    width: 350px;
    padding: 16px;
    display: flex;
    align-items: center;
    margin:auto;
    border-radius: 20px;
    flex-direction:column;
    background-color: #F8B195 ;
    box-shadow: 0 0 10px 0 #25221E ;

`

// chooses which color for each button
const getColor = className => {
  switch (className) {
    case 'red':
      return '#ff6961'
    case 'green':
      return 'lightgreen'
    case 'yellow':
      return 'yellow'
    default:
      return '#6C5B78'
  }
}
// label for trio button
export const plabels = styled.label`
  font-family: 'Courier New', Courier, monospace;
  color: 'red';    
  padding: 5px;
`
// button for the buttons
export const Button = styled.button`
    width: ${({ className }) => (className ? '110px' : '100%')};
    height:${({ className }) => (className ? '25px' : '50px')};
    background:${({ className }) => getColor(className)};
    border: none;
    margin: 5px;
    justify-content: center;
    border-radius: 3px;
    cursor: pointer;
    transition:all 0.225s linear;
    color:${({ className }) => (className ? 'Black' : 'white')};
    &:hover {
        color:white;
        background:#355C7D ;
        width:${({ className }) => (className ? '150px' : '300px')};
    }
`
