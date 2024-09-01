import React from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'

// function App() {
//   return (
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   );
// }


// this is our custom made react object
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );



const anotherUser = "chai aur react"

// This is how object looks like in React after converting html form javascript i.e jsx
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google ',
  anotherUser
);

createRoot(document.getElementById("root")).render(
  reactElement
  // <App />

)
