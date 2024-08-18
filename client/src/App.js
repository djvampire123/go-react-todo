import React from "react"
import "./App.css"
import {Container} from "semantic-ui-react"
import ToDolist from "./To-Do-List"


function App(){
  return(
    <div>
      <Container>
        <ToDolist/>
      </Container>
    </div>
  )
}

export default App;