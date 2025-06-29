## Redux Toolkit

### Redux is core library and react-redux is an implementation of it. </br>

- Starts from making a store. Each app has only one store which is called as single source of truth.

- Then make feature folder and in that folder include file name todoslice (Generally feature is called as slice).

- For making slice, 3 things are required:
    1. name, 
    2. initial state,
    3. reducers - it is an object which contains a key-value pair value contains callback function which takes two arguments (state, action).
        - state - contains updated state value in the store. 
        - action - action.payload (contains additional data needed by the reducer to update the application's state), etc.

- Export all the reducers individually and then export main source i.e todoSlice.reducer.

- In the components, to send value in the store use `useDispatch`, then using this dispatch send the reducer which is imported.

- Now to extract or take values from the store, use `useSelector`. To access the value, we need state. So `useSelector` provides callback which contains state. i.e `useSelector(state => state.todos)`.


