import { useContext } from "react"
import { UserContext } from "../contexts/user-context"
import "./UserProfile.css"

const UserProfile = () => {
  const { currentUser } = useContext(UserContext)
  const { imageUrl, name } = currentUser

  return (
    <div className="UserProfile">
      <img src={imageUrl} alt={`Avatar of ${name}`} />
      <p>{name}</p>
    </div>
  )
}

export default UserProfile
