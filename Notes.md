### Lec 1, 2, 3

1. For Web Apps
   React --> ReactDOM

   For Mobile Apps
   React --> ReactNative

2. The `index.html` is the main page that loads, which is why they are single-page applications (SPA).

3. React creates its own DOM called the Virtual DOM. It then compares it with the main DOM and makes the necessary changes.

4. function name must be capitalize (in react). function is nothing but the component and file name can ends with `js` or `jsx`

5. In some libraries like `vite` there is a strict rule, file name ends with `.jsx` and file name can start with small letter.

6. In react, javascript is added in HTML file through react-scripts but it is not shown in the HTML file. It can be seen through Inspect window.

7. In vite , javascript is loaded in HTML file through the script tag.

### Lec 4

1. {username} : this is called evaluated expression in js. it is used to inject variable in html. In curly braces we can not insert if else statement as object takes variable and not if else statement like in `reactElement` created in `main.jsx` file.

### Lec 5

1. React controls the ui updation of the page using hooks.

2. **useState:** responsible to change the state i.e propagate the change to UI(DOM).

   - syntax: const [state, setState] = useState(initialState)
   - returns 2 things(counter and setCounter(a function)) in an Array format. And the setCounter function is responsible for update of counter variable.

### Lec 6

- **Virtual DOM**: The Virtual DOM is a lightweight in-memory representation of the actual DOM in React. When a component’s state or props change, React creates a new Virtual DOM, compares it with the previous one (a process called "diffing"), and updates only the parts of the real DOM that need to change, improving performance.

- **React Fiber**: React Fiber is a complete rewrite of React’s core algorithm introduced in React 16 to make updates more efficient. It breaks the rendering process into smaller units of work, allowing React to pause, resume, or prioritize tasks, making the UI more responsive, especially for complex applications.

- **Reconciliation**: Reconciliation is the process by which React updates the DOM. After the diffing process compares the new Virtual DOM with the previous one, reconciliation determines the minimum number of changes required to update the real DOM. This ensures optimized and efficient updates.

### Lec 7

- **Props**: In React, **props** are used to pass data from one component (usually a parent) to another (usually a child). They help make components dynamic and reusable by allowing the parent component to send data or functions to child components.

Here’s a simple example: 
```jsx
import React from "react";

// Child component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent component
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
    </div>
  );
}

export default App;
```

### Explanation:

- The `App` component (parent) passes a `name` prop to the `Greeting` component (child).
- Inside `Greeting`, `props.name` is used to display the name passed from `App`.
- The `Greeting` component is reusable, as shown by rendering it twice with different `name` values.

-  In this example, `props` allow the `Greeting` component to dynamically display different names without changing its internal logic.

### Lec 8

### A react interview question on counter.

- In React, `setCounter` is an asynchronous function, meaning that if you update the state multiple times in a row without using the previous state, React might batch the updates. This can lead to incorrect results when relying on the current state.

For example, if you directly use `setCounter(counter + 1)` multiple times like this:

```js
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
```

- React may not immediately apply the updates between calls. It might batch the updates, leading to only one increment instead of three because `counter` remains the same within the function calls.

- However, when you use a function to update the state, like `setCounter(prevCounter => prevCounter + 1)`, you're ensuring that the update is based on the most recent value of `prevCounter`. This guarantees that each update correctly references the latest state, regardless of batching, leading to the expected result. This approach is essential when you're relying on the current state value in multiple state updates in the same render cycle. 

- In your code, using `prevCounter` ensures that each `setCounter` correctly increments based on the most up-to-date value.

### Lec 9

- The app uses React's `useState` hook to manage the `color` state.
- The `color` state controls the background color of the entire screen.
- Initially, the background color is set to `"olive"`.
- Several buttons are provided, each corresponding to a different color.
- When a button is clicked, the `onClick` handler updates the `color` state with the selected color.
- **Callback functions in `onClick`**:
  - Ensure the function runs **only when** the button is clicked, not when the component renders.
  - Allow passing arguments, such as the color value, to the function.
  - Prevent unintended behavior like triggering the function on every render.
- The outer `div` dynamically sets its `backgroundColor` based on the `color` state.
- Tailwind CSS is used for styling, including full-screen layout, button design, and smooth transitions.
- Buttons are fixed at the bottom of the screen, centered, and neatly spaced with rounded corners.
- Each button changes its own background color to match the color it will set.