import { type JSX, useState } from 'react'
import { Button, Input, Label } from '../lib'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Label>Count: {count}</Label>
      <Button onClick={() => { setCount(count + 1) }}>Increment</Button>
      <Button onClick={() => { setCount(count - 1) }}>Decrement</Button>
      <Input value={count} onChange={(e) => { setCount(Number(e.target.value)) }} />
    </div>
  )
}

export default App
