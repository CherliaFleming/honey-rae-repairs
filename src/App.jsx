 import { useEffect, useState } from "react"
 import { getAllTickets } from "./services/ticketService.js"
 import { TicketList } from "./components/TicketList.jsx"

 export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")  

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) => {
      return ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
      setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])



  // useEffect to fetch tickets and set to allTickets on initial render
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
  }, [showEmergency, allTickets]) // When the dependency contains multiple state variables, the useEffect is watching for any time any of the values change.

  return (
    <div className="tickets-container">
        <h2>Tickets</h2>
        <div>
        <button
        className="filter-bar"
        onClick={() => {
            setShowEmergency(true)
        }}
        >
            Emergency
            </button>
            <button 
            className="filter-btn btn-info"
            onClick={() => {
                setShowEmergency(false)
            }}
        >
            Show All 
            </button>
            </div>
            <input className="ticket-search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}/>
            < TicketList ticketsArray = {filteredTickets} /> 
            </div>
  )
}


