
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Navbar from './shared/Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <CustomerTickets></CustomerTickets>

     <h1 className='text-3xl text-center'>This is a App page</h1>
    </>
  )
}

export default App
