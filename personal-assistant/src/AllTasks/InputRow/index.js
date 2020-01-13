import React from 'react'
import { Container, Button, Input } from './styles'

const InputRow = ({ filter, setFilter }) => (
  <Container>
    <Input placeholder=" Search through your tasks!" value={filter} onChange={e => setFilter(e.target.value)} />
    <Button red> Click! </Button>
  </Container>

)

export default InputRow
