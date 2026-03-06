
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Navbar from './shared/Navbar/Navbar'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './shared/Footer/Footer'




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
    toast.success("Ticket added to In-Progress")

  }

  const handleCompleteTicket = (ticket) => {
    const remaining = inProgressTickets.filter(t => t.id !== ticket.id)
    setInProgressTickets(remaining)
    setResolvedTickets([...resolvedTickets, ticket])
    toast.success("Ticket marked as completed")
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
      <ToastContainer />
       <Footer></Footer>


    </>
  )
}

export default App
