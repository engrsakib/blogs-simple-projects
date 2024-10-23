import { useState } from 'react'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Blogs></Blogs>
    </>
  )
}

export default App
