import { use } from "react";
import Card from "./Card";

const CustomerTickets = ({ promiseTickets, handleAddTicket, inProgressTickets, handleCompleteTicket, resolvedTickets }) => {

    const tickets = use(promiseTickets)

    return (
        <div className="mt-12">
            <h1 className="text-3xl font-bold">Customer Tickets</h1>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT SIDE - Ticket Cards */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {tickets.map((ticket) => (

                        <Card
                            key={ticket.id}
                            ticket={ticket}
                            handleAddTicket={handleAddTicket}
                        />

                    ))}

                </div>

                {/* RIGHT SIDE - Summary */}
                <div className="bg-white p-6 rounded-xl shadow-md">

                    <h3 className="text-xl font-semibold mb-4">Task Status</h3>

                    {/* ✅ ADDED: Showing selected tickets */}
                    {
                        inProgressTickets.map(ticket => (
                            <p key={ticket.id} className="text-center p-4 my-2">
                                {ticket.title} <br />
                                {ticket.description}
                                <button onClick={() => handleCompleteTicket(ticket)} className="btn w-full bg-[#02A53B] text-white">Completed</button>
                            </p>
                        ))
                    }

                    <h3 className="text-xl font-semibold mb-4">Resolve task</h3>

                    {
                        resolvedTickets.map(ticket => (
                            <p key={ticket.id} className="p-2 border-b">
                                {ticket.title}
                            </p>
                        ))
                    }

                </div>

            </div>
        </div>
    );
};

export default CustomerTickets;