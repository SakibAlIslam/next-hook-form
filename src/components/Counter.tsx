'use client';

import { increment, decrement, reset } from '@/lib/slices/counter/counterSlice';
import { RootState, AppDispatch } from '@/lib/store';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);  // Access the counter state
  const dispatch = useDispatch<AppDispatch>();  // Access dispatch function

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
