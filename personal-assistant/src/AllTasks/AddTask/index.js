import React, { useState } from 'react'
import nanoid from 'nanoid'
import {
  ContainerButtons, plabels, ContainerInput, Container, Button, Input,
} from './styles'

const AddTask = ({ allTasks, setAllTasks }) => {
  const [todoText, setTodoText] = useState('')
  const [todoDetail, setTodoDetail] = useState('')
  return (
    <Container>
      <ContainerInput>
        <Input placeholder="Add a Task!" value={todoText} onChange={e => setTodoText(e.target.value)} />
        <Input placeholder="Any more details?" value={todoDetail} onChange={e => setTodoDetail(e.target.value)} />
      </ContainerInput>
      <plabels> This is a Button </plabels>
      <ContainerButtons>
        <Button className="green">Green</Button>
        <Button className="yellow">Yellow</Button>
        <Button className="red">Red</Button>
      </ContainerButtons>
      <Button onClick={() => setAllTasks([...allTasks, { id: nanoid(), todoText, todoDetail }])}>
        Save Task
      </Button>
    </Container>
  )
}

export default AddTask
