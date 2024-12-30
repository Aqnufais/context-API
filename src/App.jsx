

import './App.css'
import UserConatextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserConatextProvider>
      <h1>react tutorial</h1>
      <Login/>
      <Profile/>
    </UserConatextProvider>
  )
}

export default App
