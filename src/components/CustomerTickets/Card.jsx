import buttonImg from '../../assets/button.png'
import buttonImg2 from '../../assets/button1.png'

const Card = ({ ticket, handleAddTicket }) => {

    const { title, description, customer, priority, status, createdAt, id } = ticket;

    const handleClick = () => {
        handleAddTicket(ticket)
    }

    //  choosing image depending on status
    const buttonImage = status === "In Progress" ? buttonImg2 : buttonImg;

    //  choosing button background color
    const buttonBg = status === "In Progress" ? "bg-yellow-100" : "bg-gray-200";

    return (
        <div onClick={handleClick} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">

            <div className="flex justify-between">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>

                {/* dynamic image + dynamic background */}
                <button className={`btn ${buttonBg}`}>
                    <span>
                        <img src={buttonImage} alt="status icon" />
                    </span>
                    {status}
                </button>
            </div>

            <p className="text-gray-500 text-sm mb-3">{description}</p>

            <div className="flex justify-between">

                <p className="text-sm text-gray-600 mb-2">
                    #{id}
                </p>

                <p className={`text-sm mb-2 
                    ${priority === "High" ? "text-red-500" :
                      priority === "Medium" ? "text-yellow-500" :
                      "text-green-500"}`}>

                    <span className="font-medium">Priority:</span> {priority}
                </p>

                <p className="text-sm text-gray-600 mb-2">
                    {customer}
                </p>

                <p className="text-sm text-gray-600 mb-2">
                    {createdAt}
                </p>

            </div>

        </div>
    );
};

export default Card;