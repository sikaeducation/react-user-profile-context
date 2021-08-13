import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import "./UserProfile.css"

const UserProfile = () => {
  const user = useContext(UserContext)

  return (
    <div className="UserProfile">
      <img src={user.imageUrl} alt={`Avatar of ${user.name}`} />
      <p>{user.name}</p>
    </div>
  )
}

export default UserProfile
