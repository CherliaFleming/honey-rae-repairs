import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { getAllTickets } from "../services/ticketService.jsx"
import { TicketList } from "../components/TicketList.jsx"
import { CustomerList } from "../components/customers/CustomerList.jsx"
import { EmployeeList } from "../employees/employeeList.jsx"
import { EmployeeDetails } from "../employees/EmployeeDetails.jsx"
import { EmployeeEdit } from "../components/EmployeeEdit.jsx"


export const ApplicationViews = () => {
  const currentUser = JSON.parse(localStorage.getItem("honey_user"))

  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])

  useEffect(() => {
    getAllTickets().then(setAllTickets)
  }, [])

  useEffect(() => {
    if (showEmergency) {
      setFilteredTickets(allTickets.filter((t) => t.emergency === true))
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergency, allTickets])

  return (
    <>
      <h2>Tickets</h2>
      <div>
        <button className="filter-bar" onClick={() => setShowEmergency(true)}>Emergency</button>
        <button className="filter-btn btn-info" onClick={() => setShowEmergency(false)}>Show All</button>
      </div>
      <input
        className="ticket-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TicketList ticketsArray={filteredTickets} />
      <CustomerList />

      <Routes>
        <Route path="/employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
        <Route path="/employee/edit" element={<EmployeeEdit currentUser={currentUser} />} />
      </Routes>
    </>
  )
}