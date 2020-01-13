import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import InputRow from './InputRow'
import theme from '../theme'
import AddTask from './AddTask'
import Tasks from './Tasks'
import { Container, ContainerInputs, ContainerTasks } from '../styles'
import { NoTasks } from './Tasks/styles'


const AllTasks = () => {
  const [allTasks, setAllTasks] = useState([])
  const [filter, setFilter] = useState('')
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ContainerInputs>
          <InputRow filter={filter} setFilter={setFilter} />
          <br />
          <AddTask allTasks={allTasks} setAllTasks={setAllTasks} />
          <ContainerTasks>
            {allTasks.length
              ? (allTasks.filter(({ todoText }) => todoText.includes(filter))
                .map(({ id, todoText, todoDetail }) => (
                  <Tasks
                    allTasks={allTasks}
                    setAllTasks={setAllTasks}
                    id={id}
                    todoText={todoText}
                    todoDetail={todoDetail}
                  />
                )))
              : <NoTasks>No Tasks Left!</NoTasks>}
          </ContainerTasks>
        </ContainerInputs>
      </Container>
    </ThemeProvider>
  )
}

export default AllTasks
