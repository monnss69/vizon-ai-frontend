'use client'

import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '@/lib/features/counterSlice'
import type { RootState } from '@/lib/store'

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold">Redux Placeholder Page</h1>
      <p>Count: {count}</p>
      <div className="flex gap-2">
        <button
          className="rounded bg-gray-200 px-4 py-2"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="rounded bg-gray-200 px-4 py-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </main>
  )
}
