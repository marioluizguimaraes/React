import { useState } from "react"


export default function App(){

  const [message, setMessage] = useState('Olá mundo')
  
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={() => {setMessage('cliquei')}}>Mudar mensagem</button>
    </div>
  )
}