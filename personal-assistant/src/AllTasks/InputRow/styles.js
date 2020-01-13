import styled from 'styled-components'

export const Input = styled.input`
    font-family: ${props => props.theme.fonts.header.family};
    font-weight: ${props => props.theme.fonts.header.weight};
    flex:2;
    height: 20px;
    background-color: #FBF0D9;
    margin-right: 10px;
    border-radius: 5px;
`

export const Container = styled.div`
    width: 700px;
    padding: 16px;
    display: flex;
    align-items: center;
    margin:auto;
    background-color: #F8B195;
    box-shadow: 0 0 7px 0 #25221E ;
    border-radius:5px;

`

export const Button = styled.button`
    width: 100px;
    height:25px;
    background: #6C5B78;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    color:white;
    transition:all 0.225s linear;
    &:hover {
        background:#355C7D;
        width:150px;
    }
`
