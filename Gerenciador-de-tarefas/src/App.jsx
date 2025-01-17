import { useState } from "react"
import Tasks  from "./components/Tasks/Tasks"
import AddTasks from "./components/AddTasks/AddTasks"

export default function App(){

  return(
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Tasks/>
      <AddTasks/>
    </div>
  )
}