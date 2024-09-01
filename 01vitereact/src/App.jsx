import Chai from "./chai"

function App() {
  const username = "chai aur code"

  return (
    // <>......</> : this is called fragment in react. It is used to return multiple element as JSX only allowed to return one element.

    //{username} : this is called evaluated expression in js. it is used to inject variable in html. In curly braces we can not insert if else statement as object takes variable and not if else statement.

    <>  

    <Chai />
    <h1>chai aur react {username}</h1>
    <p>test paragraph</p>

    </>
  )
}

export default App
