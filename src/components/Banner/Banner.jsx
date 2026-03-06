const Banner = ({inProgressTickets, resolvedTickets}) => {
  return (
    <div className="mt-12">
      <div className="flex justify-between gap-12">
        
        <div className="h-80 flex-1 bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] text-white flex items-center justify-center">
          <div className="text-center">
            <p className="text-3xl">In-Progress</p>
            <p className="text-6xl font-bold">{inProgressTickets.length}</p>
          </div>
        </div>

        <div className="h-80 flex-1 bg-[linear-gradient(90deg,#54CF68_0%,#00827A_100%)] text-white flex items-center justify-center">
          <div className="text-center">
            <p className="text-3xl">Resolved</p>
            <p className="text-6xl font-bold">{resolvedTickets.length}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;