import { useState } from 'react'
import AdviceGenerator from './components/AdviceGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pageWrapper">
      <AdviceGenerator/>
    </div>
  )
}

export default App
