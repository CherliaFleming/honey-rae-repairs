import { Ticket } from "./Ticket.jsx"

export const TicketList = ({ticketsArray}) => {
    return (
        <div className="tickets-container">
            {ticketsArray.map((ticket) => {
                return <Ticket key={ticket.id} ticket={ticket} />
            })}
        </div>
    )
}
   