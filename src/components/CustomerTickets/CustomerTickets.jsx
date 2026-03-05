import { useEffect, useState } from "react";
import Card from "./Card";

const CustomerTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/Ticket.json")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* LEFT SIDE - Ticket Cards */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>

      {/* RIGHT SIDE - Summary */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Ticket Summary</h3>
      </div>

    </div>
  );
};

export default CustomerTickets;