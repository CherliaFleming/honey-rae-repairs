const Ticket = ({ ticket }) => {
    return (
        <div className="ticket">
            <div className="ticket-info">
                <p>{ticket.description}</p>
                <p>{ticket.emergency ? "Emergency" : "Not Emergency"}</p>
                <p>{ticket.dateCompleted}</p>
            </div>
        </div>
    )
    
}