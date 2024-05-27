import { type JSX, useState } from 'react'
import { Button, Card, CardHeader, CardTitle, Input, Label } from '../lib/ui'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='inline-flex items-center gap-8'>
        <Label>Count: {count}</Label>
        <Button onClick={() => { setCount(count + 1) }}>Increment</Button>
        <Button onClick={() => { setCount(count - 1) }}>Decrement</Button>
        <Input value={count} onChange={(e) => { setCount(Number(e.target.value)) }} />
      </div>
        <Card>
          <CardHeader>
            <CardTitle>Hello world</CardTitle>
          </CardHeader>
        </Card>
    </>
  )
}

export default App
