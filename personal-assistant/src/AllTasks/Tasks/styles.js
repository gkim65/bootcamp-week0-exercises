import styled from 'styled-components'
import imageCheck from './checkmark1.png'

export const TaskContainer = styled.div`
    height: 40px;
    padding: 10px;
    display: flex;
    flex: 1;
    margin:auto;
    border-radius: 2px;
    background-color: white;
    
`
export const NoTasks = styled.text`
    font-family: Arial, Helvetica, sans-serif;
`
export const CheckMark = styled.button`
    width:30px;
    height:30px;
    border-radius: 15px;
    background-color: black;
    transition:all 0.25s;
    &:hover {
        background-image: url(${imageCheck});
        background-size: contain;
        background-color:white ;
        }
`
export const Container = styled.div`
    width:100%;
    display: flex;
    flex: 1;
    align-items: center;
    margin:auto;
    
`
