'use client'

import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@/lib/features/counterSlice'
import type { RootState } from '@/lib/store'
import { Button } from '@/components/Button'
import { useToggle } from '@/hooks/useToggle'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [on, toggle] = useToggle()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Redux Placeholder Page</h1>
      <p>Count: {count}</p>
      <div className="flex gap-2">
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
      <div className="mt-4">
        <p>Toggle is {on ? 'ON' : 'OFF'}</p>
        <Button onClick={toggle}>Toggle</Button>
      </div>
    </main>
  )
}
