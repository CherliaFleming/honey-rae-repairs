import "./employee.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getStaffUser } from "../services/userService"
import { User } from "../users/User.jsx"        


export const EmployeeList = () => {
    const [ employees, setEmployees ] = useState([])

    useEffect (() => {
        getStaffUser().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])
   return (
  <div className="employees">
    {employees.map((employeeObj) => (
      <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
        <User user={employeeObj} />
      </Link>
    ))}
  </div>
)
}