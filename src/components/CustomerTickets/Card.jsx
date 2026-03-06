import buttonImg from '../../assets/button.png'


const Card = ({ ticket,handleAddTicket }) => {

    const { title, description, customer, priority, status, createdAt, id } = ticket;
    const handleClick = () => {
        handleAddTicket(ticket)
    }

    return (
        <div onClick={handleClick} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">


            <div className="flex justify-between">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <button className="btn "> <span><img src={buttonImg} alt="" /></span>{status}</button>
            </div>


            <p className="text-gray-500 text-sm mb-3">{description}</p>


            <div className="flex justify-between">

                <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium"></span> #{id}
                </p>

                <p className={`text-sm mb-2 
    ${priority === "High" ? "text-red-500" :
                        priority === "Medium" ? "text-yellow-500" :
                            "text-green-500"}`}>

                    <span className="font-medium">Priority:</span> {priority}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium"></span> {customer}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium"></span> {createdAt}
                </p>

            </div>




           
        </div>
    );
};

export default Card;