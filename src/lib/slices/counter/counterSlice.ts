import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the counter
interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

// Create the slice for the counter
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;  // Increment the counter by 1
        },
        decrement: (state) => {
            state.value -= 1;  // Decrement the counter by 1
        },
        reset: (state) => {
            state.value = 0;  // Reset the counter to 0
        },
    },
});

// Export actions to use in components
export const { increment, decrement, reset } = counterSlice.actions;

// Export the reducer to add to the store
export default counterSlice.reducer;
