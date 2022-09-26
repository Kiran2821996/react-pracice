import React from 'react'
import "./App.css"
import { Counter} from './components/Counter'


export default function App() {
  return (
    <>

    <Counter/>
    <Counter count={2}/>
   
    </>
  )
}
