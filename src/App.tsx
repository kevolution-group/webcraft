import { type JSX, useState } from 'react'
import { Button, Input, Label } from '../lib'

const App = (): JSX.Element => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Label>Count: {count}</Label>
        <Button onClick={() => { setCount(count + 1) }}>Increment</Button>
        <Button onClick={() => { setCount(count - 1) }}>Decrement</Button>
        <Input value={count} onChange={(e) => { setCount(Number(e.target.value)) }} />
      </div>
      <div className='inline-flex gap-12 flex-wrap items-center justify-center w-full'>
        <div className='m-10 size-10 shadow-xs'></div>
        <div className='m-10 size-10 shadow-sm'></div>
        <div className='m-10 size-10 shadow'></div>
        <div className='m-10 size-10 shadow-md'></div>
        <div className='m-10 size-10 shadow-lg'></div>
        <div className='m-10 size-10 shadow-xl'></div>
        <div className='m-10 size-10 shadow-2xl'></div>
        <div className='m-10 size-10 shadow-3xl'></div>
      </div>
    </>
  )
}

export default App
