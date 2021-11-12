import { UserContextProvider } from "./contexts/user-context"
import HeaderBar from "./components/HeaderBar"
import "./App.css"

const App = () => {

  return (
    <div className="App">
      <UserContextProvider>
        <HeaderBar />
      </UserContextProvider>
    </div>
  )
}

export default App
