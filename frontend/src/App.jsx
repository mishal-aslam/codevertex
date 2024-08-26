import { useState } from 'react'
import Dashboard from './AdminPanel/Dashboard'
import AddCourse from './AdminPanel/AddCourse'
import StudentDetails from './AdminPanel/StudentDetails'
import AddStudent from './AdminPanel/AddStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <StudentDetails />
      </div>
       
    </>
  )
}

export default App
