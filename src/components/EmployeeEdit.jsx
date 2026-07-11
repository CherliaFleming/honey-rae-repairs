import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getEmployeeById, updateEmployee } from "../../services/employeeService.jsx"
import "./Form.css"

export const EmployeeEdit = ({ currentUser }) => {
  const [employee, setEmployee] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getEmployeeById(currentUser.id).then(setEmployee)
  }, [])

  const handleInputChange = (event) => {
    const stateCopy = { ...employee }
    stateCopy[event.target.name] = event.target.value
    setEmployee(stateCopy)
  }

  const handleSave = (event) => {
    event.preventDefault()
    updateEmployee(employee).then(() => {
      navigate(`/employee/${currentUser.id}`)
    })
  }

  return (
    <form>
      <h2>Edit Your Profile</h2>
      <fieldset>
        <div className="form-group">
          <label>Specialty</label>
          <input
            type="text"
            name="specialty"
            value={employee.specialty ? employee.specialty : ""}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Rate</label>
          <input
            type="number"
            name="rate"
            value={employee.rate ? employee.rate : 0}
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