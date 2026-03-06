
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Navbar from './shared/Navbar/Navbar'



const fetchTickets = () => {
  return fetch("/Ticket.json")
    .then(res => res.json());
}

const promiseTickets = fetchTickets()

function App() {
  const [inProgressTickets, setInProgressTickets] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([])

  const handleAddTicket = (ticket) => {
    setInProgressTickets([...inProgressTickets, ticket])
  }

  const handleCompleteTicket = (ticket) => {
    const remaining = inProgressTickets.filter(t => t.id !== ticket.id)
    setInProgressTickets(remaining)
    setResolvedTickets([...resolvedTickets, ticket])
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner
        inProgressTickets={inProgressTickets}
        resolvedTickets={resolvedTickets}
      ></Banner>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <CustomerTickets
          promiseTickets={promiseTickets}
          inProgressTickets={inProgressTickets}
          resolvedTickets={resolvedTickets}

          handleAddTicket={handleAddTicket}
          handleCompleteTicket={handleCompleteTicket}

        ></CustomerTickets>
      </Suspense>

      <h1 className='text-3xl text-center'>This is a App page</h1>
    </>
  )
}

export default App
