import { createContext, useState } from "react"
import Avatar from "../assets/miles.jpg"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "Miles Davis",
    imageUrl: Avatar,
  })

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}
