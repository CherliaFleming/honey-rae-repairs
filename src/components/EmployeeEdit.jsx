import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserById, updateUser } from "../../services/userService.jsx"
import "./Form.css"

export const EmployeeEdit = ({ currentUser }) => {
  const [employee, setEmployee] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getUserById(currentUser.id).then(setEmployee)
  }, [])

  const handleInputChange = (event) => {
    const stateCopy = { ...employee }
    stateCopy[event.target.name] = event.target.value
    setEmployee(stateCopy)
  }

  const handleSave = (event) => {
    event.preventDefault()
    updateUser(employee).then(() => {
      navigate(`/employees/${currentUser.id}`)
    })
  }

  return (
    <form>
      <h2>Edit Your Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={employee.fullName ? employee.fullName : ""}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email ? employee.email : ""}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <button className="form-btn btn-info" onClick={handleSave}>
        Save
      </button>
    </form>
  )
}