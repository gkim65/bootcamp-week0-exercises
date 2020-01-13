import React from 'react'
import { TaskContainer, CheckMark, Container } from './styles'

const DeleteTask = (allTasks, setAllTasks, { id }) => {
  setAllTasks(allTasks.filter(tasks => tasks.id !== id))
}


const Tasks = ({
  allTasks, setAllTasks, id, todoText, todoDetail,
}) => (
  <Container>
    <TaskContainer>
      <CheckMark onClick={() => DeleteTask(allTasks, setAllTasks, { id })} />
      {`${todoText}  ${todoDetail}`}
    </TaskContainer>
  </Container>
)


export default Tasks
