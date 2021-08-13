import { useState } from "react"
import UserContext from "./contexts/UserContext"
import HeaderBar from "./components/HeaderBar"
import "./App.css"
import Avatar from "./assets/miles.jpg"

const App = () => {
  const [currentUser, setCurrentUser] = useState({
    name: "Miles Davis",
    imageUrl: Avatar,
  })

  return (
    <div className="App">
      <UserContext.Provider value={currentUser}>
        <HeaderBar />
      </UserContext.Provider>
    </div>
  )
}

export default App
