import React from 'react'

const TicketsModal = ({tickets}) => {
  return (
    <div>
      {
        tickets.map((ticket) => (
            <p>{ticket.band}</p>
        ))
      }
    </div>
  )
}

export default TicketsModal
