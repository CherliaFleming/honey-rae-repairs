import "./employee.css"
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
            {employees.map((employeeObj) => {
                return <User key= {employeeObj.id} user={employeeObj} />
            })}
        </div>
    )
}