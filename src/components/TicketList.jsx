import { getAllTickets } from "../services/ticketService.js"
import { useState, useEffect } from "react"
import { Ticket } from "./Ticket.jsx"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    useEffect(() => { 
      getAllTickets().then(tickets => setTickets(tickets))
    }, [])
    return (
        <div className="tickets">
            {tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} />)}
        </div>
    )
}