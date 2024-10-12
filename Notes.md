## Table of Contents

- [React Roadmap, Create React Projects, Underestand the react flow and structures](#lec-1-2-3)
- [Create your own react Library and JSX](#lec-4)
- [Why you need hooks and projects](#lec-5)
- [Virtual DOM, fibre and reconciliation](#lec-6)
- [Tailwind and props in react](#lec-7)
- [A react interview question on counter](#lec-8)
- [Building out 1st react project](#lec-9)
- [UseEffect, useRef, UseCallback in 1 project](#lec-10)
- [Custom hooks in react | currency project](#lec-11)
- [What is React router](#lec-12)

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

- In this example, `props` allow the `Greeting` component to dynamically display different names without changing its internal logic.

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

### Lec 10

### 1. **`useCallback` Hook**:

- **What it does**:
  - `useCallback` returns a memoized version of the callback function that only changes if one of the dependencies has changed.
  - This is particularly useful for optimizing performance in components that pass callback functions to child components, especially when those child components are wrapped in `React.memo`.
- **Why it's useful**:
  - In React, functions are redefined on every render. If a child component depends on a callback function, it may unnecessarily re-render unless you use `useCallback` to prevent the function from changing unless necessary.
- **Real-World Example**:

  - Suppose you have a parent component that renders a list of items, and each item has a delete button. Without `useCallback`, the delete function would be re-created on every render, which might cause unnecessary re-renders of the child component if it's memoized.

  ```jsx
  const Parent = () => {
    const [count, setCount] = useState(0);

    const handleDelete = useCallback((id) => {
      console.log("Delete", id);
    }, []);

    return (
      <div>
        <Child onDelete={handleDelete} />
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
  ```

### 2. **`useEffect` Hook**:

- **What it does**:
  - `useEffect` allows you to perform side effects in functional components. Side effects can include data fetching, subscriptions, manual DOM manipulations, and timers.
  - By default, `useEffect` runs after every render, but you can control when it runs by specifying dependencies.
- **How it works**:
  - The effect runs after the component renders and can also return a cleanup function that runs when the component is unmounted or before the effect is re-run.
  - If you provide an empty dependency array (`[]`), the effect will run only once, mimicking `componentDidMount`.
- **Common uses**:
  - **Data fetching**: Make API calls after the component renders.
  - **Event listeners**: Add and clean up event listeners.
  - **DOM manipulation**: Directly manipulate the DOM (though you should try to avoid this when possible in React).
- **Example**:

  ```jsx
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/data");
      console.log(data);
    };

    fetchData();

    // Cleanup: runs when the component unmounts
    return () => {
      console.log("Cleaning up...");
    };
  }, []); // Empty dependency array, so it only runs once.
  ```

- **Dependency Array**:

  - You can pass a list of dependencies to `useEffect`. It will re-run only when one of the dependencies changes.
  - If no dependency array is provided, the effect runs after every render.

  ```jsx
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // Runs only when `count` changes.
  ```

### 3. **`useRef` Hook**:

- **What it does**:
  - `useRef` returns a mutable object with a `.current` property that persists across renders. It doesn’t trigger a re-render when updated.
  - Typically used for accessing or manipulating DOM elements directly, and for storing any mutable values that persist between renders without triggering re-renders.
- **When to use**:

  - **Accessing DOM elements**: You can use `useRef` to interact with DOM nodes directly, like focusing an input field or scrolling an element into view.
  - **Storing values**: You can store any mutable value (like timers, previous values, or event handlers) without causing the component to re-render.

- **Example (DOM manipulation)**:

  ```jsx
  const InputComponent = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
      inputRef.current.focus();
    };

    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>Focus Input</button>
      </div>
    );
  };
  ```

- **Example (storing values)**:

  - You can use `useRef` to store the previous value of a state variable without triggering a re-render.

  ```jsx
  const Component = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
      prevCountRef.current = count;
    }, [count]);

    const prevCount = prevCountRef.current;

    return (
      <h1>
        Now: {count}, Before: {prevCount}
      </h1>
    );
  };
  ```

In summary, each hook serves a unique purpose:

- **`useCallback`**: Memoizes functions to prevent unnecessary re-renders.
- **`useEffect`**: Manages side effects (like data fetching and subscriptions).
- **`useRef`**: Allows you to persist values across renders without causing re-renders, and it’s commonly used for accessing DOM elements.

### Lec 11

- majority of the time hooks returns javascript only, so to create custom Hooks we create `.js` files and if it returns jsx then create `.jsx` file.
- Remember to use `keys` in loops in React.

### Lec 12

Here we react router dom package.
  Here's an improved and more informative explanation:

In React, navigation between different components or pages is typically handled using the `Link` and `NavLink` components from the **react-router-dom** library, rather than the traditional `<a>` tag.

### **`Link` vs `<a>` Tag**

- **`Link`**: The `Link` component behaves similarly to the `<a>` tag in HTML but with one major difference: it prevents the full page from refreshing when navigating between pages. Instead of making a new HTTP request to the server, `Link` performs client-side navigation by updating the URL and rendering the new components without refreshing the page. This is a core concept in single-page applications (SPAs) like those built with React.

  **Benefits**:

  - **No Full Page Refresh**: Unlike the `<a>` tag, which causes a complete reload of the page and all its resources, `Link` allows for a smooth transition between views. This results in faster navigation and a better user experience.
  - **Efficient DOM Handling**: React utilizes its virtual DOM to handle the changes, updating only the parts of the page that need to be re-rendered, reducing unnecessary overhead.

  ```jsx
  import { Link } from "react-router-dom";

  <Link to="/about">Go to About</Link>;
  ```

- **`<a>` Tag**: The `<a>` tag is used in traditional web development to link between pages, but it triggers a full page reload every time the user clicks on the link. This is inefficient in React apps where the goal is to minimize full page reloads and use client-side rendering instead.

  ```html
  <a href="/about">Go to About</a>
  ```

### **`NavLink`**

- **`NavLink`**: This is an enhanced version of `Link` provided by **react-router-dom**. It offers additional features, such as automatically applying CSS classes to indicate which link is currently active (i.e., the link that matches the current route). This is especially useful for creating navigation bars where users can visually identify which page they are on.

  **Key Features**:

  - **Active State**: `NavLink` allows you to specify an `activeClassName` or `activeStyle` that is applied when the link's destination matches the current URL. This is particularly useful for styling the active navigation item.
  - **Exact Matching**: You can use the `exact` prop to ensure that the active class is applied only when the URL exactly matches the route path.

  ```jsx
  import { NavLink } from "react-router-dom";

  <NavLink to="/about" activeClassName="active" exact>
    About Us
  </NavLink>;
  ```

  In this example, the "active" class will be applied to the link only when the URL matches `/about` exactly. This makes it easy to style the active navigation item differently from the others.

- Interview Q: is there a need to use `a` tag? Ans: No

### Concept of React Router

**React Router** is a standard library for routing in React applications. It enables the navigation between different views or components, allowing you to build single-page applications (SPAs) with dynamic, client-side routing. In a SPA, the application renders different components or pages without making a full page reload, providing a seamless user experience similar to traditional multi-page websites.

Here's a breakdown of the **core concepts** of React Router:

---

### 1. **Single Page Application (SPA)**
In traditional websites, each time a user clicks a link, a new request is made to the server to load a new page. This causes the entire page to reload, which can be inefficient and slow.

React Router allows the creation of SPAs, where different views (pages) are rendered on the client side, and only the necessary components are updated. When you navigate to a different route, React Router changes the components rendered on the screen without reloading the entire page. This leads to a faster, smoother user experience.

---

### 2. **Routing Components**

React Router provides several key components to handle routing and navigation:

- **`<BrowserRouter>`**: This component wraps the entire application and enables the use of routing. It listens to the URL changes and decides which component to render based on the current URL. It uses the HTML5 history API to manipulate the browser’s URL for client-side navigation.
  
  ```jsx
  import { BrowserRouter } from 'react-router-dom';

  <BrowserRouter>
    <App />
  </BrowserRouter>
  ```

- **`<Routes>` and `<Route>`**: `<Routes>` acts as a container for all the `<Route>` elements, where each `<Route>` defines a mapping between a URL path and a component that should be rendered for that path.
  
  - **`<Route>`**: Each `<Route>` defines a path and the component to render when the URL matches that path.
  
  ```jsx
  import { Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    );
  }
  ```

  In the example above:
  - `/` renders the `Home` component.
  - `/about` renders the `About` component.
  - `/contact` renders the `Contact` component.

---

### 3. **Linking Between Routes**

To navigate between routes without reloading the page, React Router provides the **`<Link>`** and **`<NavLink>`** components.

- **`<Link>`**: This replaces the traditional `<a>` tag for navigation. It allows the app to change the URL and render the appropriate component without refreshing the page.
  
  ```jsx
  import { Link } from 'react-router-dom';

  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
  ```

- **`<NavLink>`**: Similar to `<Link>`, but it allows for additional functionality such as adding an active class or styling to the link when the current URL matches the route.

  ```jsx
  import { NavLink } from 'react-router-dom';

  <nav>
    <NavLink to="/" activeClassName="active" exact>Home</NavLink>
    <NavLink to="/about" activeClassName="active">About</NavLink>
  </nav>
  ```

  Here, the "active" class will be applied to the link that matches the current URL, helping to highlight the active page in a navigation bar.

---

### 4. **Dynamic Routing**

React Router allows routes to have **dynamic segments**, enabling parameterized routing. You can pass dynamic parts of the URL to your component as props using the `:param` syntax.

- **URL Parameters**: A parameterized route can be defined using the colon (`:`) syntax.

  ```jsx
  <Routes>
    <Route path="/user/:id" element={<User />} />
  </Routes>
  ```

  In this example, `:id` is a dynamic part of the URL. If you navigate to `/user/5`, the `User` component will be rendered, and it will have access to `id` as a parameter.

  In the `User` component, you can access the `id` parameter using the `useParams` hook:

  ```jsx
  import { useParams } from 'react-router-dom';

  function User() {
    const { id } = useParams();  // Destructuring id from URL params
    return <div>User ID: {id}</div>;
  }
  ```

---

### 5. **Programmatic Navigation**

React Router also provides the **`useNavigate`** hook to perform navigation programmatically. This is useful when you need to navigate after performing certain actions, such as submitting a form.

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Perform some action, then navigate to another route
    navigate('/success');
  };

  return (
    <button onClick={handleSubmit}>Submit</button>
  );
}
```

---

### 6. **Nested Routing**

React Router supports nested routes, allowing you to create hierarchies of views where a parent route has child routes. Nested routes enable more complex page layouts with subcomponents or sub-pages.

```jsx
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="settings" element={<Settings />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
```

In this example, `/dashboard` is the parent route, and it has child routes `/dashboard/settings` and `/dashboard/profile`. The parent and child components can be displayed together, such as a dashboard sidebar and the respective content.

---

### 7. **Redirects**

Sometimes, you need to redirect users from one route to another. React Router provides the `Navigate` component for this purpose.

```jsx
import { Navigate } from 'react-router-dom';

<Routes>
  <Route path="/old-route" element={<Navigate to="/new-route" />} />
</Routes>
```

In this case, when the user visits `/old-route`, they will be automatically redirected to `/new-route`.

---

### 8. **Protected Routes**

In many applications, you might want to restrict access to certain routes based on conditions (e.g., authentication). You can implement **protected routes** by wrapping your route logic in a conditional check.

```jsx
function PrivateRoute({ children }) {
  const isAuthenticated = useAuth(); // Custom hook or state for checking authentication

  return isAuthenticated ? children : <Navigate to="/login" />;
}

<Routes>
  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
</Routes>
```

Here, if the user is not authenticated, they are redirected to the `/login` route.

---

### 9. **Lazy Loading Routes**

For performance optimization, React Router can lazy load routes, meaning that the component is only loaded when it's needed. This helps to reduce the initial bundle size, improving the performance of your app.

```jsx
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
```
