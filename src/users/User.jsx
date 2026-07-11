import "./User.css"


export const User = ({ user }) => {
     return (
        <div className="user">
          <div>
            <div className="user-info">Name</div>
            <div>{user.fullName}</div>
        </div>
      <div>
      <div className="user-info">Email</div>
      <div>{user.email}</div>
      </div>
    </div>
  )
}

export const getUserByemail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  )
}