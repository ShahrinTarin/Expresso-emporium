import './App.css'
import Users from './components/Users'

const userPromise =fetch('http://localhost:3000/users').then(res=>res.json())
function App() {
  return (
    <>
      
      <h1>simple react crud operation</h1>
      <Users userPromise={userPromise}></Users>
     
    </>
  )
}

export default App
