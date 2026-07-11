import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserById } from "../services/userService"

export const EmployeeDetails = () => {
  const { employeeId } = useParams()
  const [employee, setEmployee] = useState(null)

  useEffect(() => {
    getUserById(employeeId).then(setEmployee)
  }, [employeeId])

  if (!employee) return <div>Loading...</div>

  return (
    <div className="employee">
      <div className="employee-header">{employee.name}</div>
      <div className="employee-info">Email: {employee.email}</div>
    </div>
  )
}