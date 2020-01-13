import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AllTasks from './AllTasks/index'
import HomePage from './HomePage'
import theme from './theme'

const App = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/allTasks">
          <AllTasks />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </ThemeProvider>
  </div>
)

export default App
