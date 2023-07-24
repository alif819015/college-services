
const CollageCard = ({list}) => {
  const {image, name, admission_dates, events, research_history, sports} = list;
    return (
        <div>
            <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          <img className="md:h-[150px] md:w-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p><span className="font-bold">Fall_semester: </span>{admission_dates.fall_semester}</p>
          <p><span className="font-bold">Spring_semester: </span>{admission_dates.spring_semester}</p>
          <p><span className="font-bold">Events: </span>{events}</p>
          <p><span className="font-bold">Research_history: </span>{research_history}</p>
          <p><span className="font-bold">Sports: </span>{sports}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default CollageCard;