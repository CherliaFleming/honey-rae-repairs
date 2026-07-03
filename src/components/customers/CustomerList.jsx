import { useEffect, useState } from "react"
import { getNonStaffUser } from "../../services/userService"
import { User } from "../../users/User.jsx"
import "../../Customers.css"


export const CustomerList = () => {
 const [customers, setCustomers] = useState([])

 useEffect (() => {
   getNonStaffUser().then((customerArray) => {
     setCustomers(customerArray)
   })
 }, [])
 return (
  <div className="customers">
    {customers.map((customerObj) => {
      return <User key= {customerObj.id} user={customerObj} />
    })}
  </div>
 )
}