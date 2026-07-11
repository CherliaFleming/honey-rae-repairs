import { useEffect, useState } from "react"
import "./App.css"
import { getAllTickets } from "./services/ticketService.jsx"
import { TicketList } from "./components/TicketList.jsx"
import { CustomerList } from "./components/customers/CustomerList.jsx"
import { EmployeeList } from "./employees/employeeList.jsx"
import { Route, Routes, Link } from "react-router-dom"
import { NavBar } from "./components/NavBar.jsx"
import { EmployeeDetails } from "./employees/EmployeeDetails.jsx"

export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) => {
      return ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])

  useEffect(() => {
    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      console.log("tickets set!")
    })
  }, [])

  useEffect(() => {
    if (showEmergency) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      )
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergency, allTickets])

  return (
    <div className="tickets-container">
      <NavBar />
      <h2>Tickets</h2>
      <div>
        <button className="filter-bar" onClick={() => setShowEmergency(true)}>
          Emergency
        </button>
        <button className="filter-btn btn-info" onClick={() => setShowEmergency(false)}>
          Show All
        </button>
      </div>
      <input
        className="ticket-search"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <TicketList ticketsArray={filteredTickets} />
      <CustomerList />

      <Routes>
        <Route path="/employees">
          <Route index element={<EmployeeList />} />
          <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
      </Routes>
    </div>
  )
}