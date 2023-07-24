import { useEffect, useState } from "react";

const Card = () => {
  const [collageList, setCollageList] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setCollageList(data));
  }, []);

  const handleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll); 
  };

  const displayedData = showAll ? collageList : collageList.slice(0, 3);

  return (
    <div>
    <div className="grid md:grid-cols-3 gap-4 my-4 mx-5">
      {displayedData.map((list) => (
        <div
          key={list._id}
          className="card card-compact w-auto bg-base-100 shadow-xl"
        >
          <figure>
            <img
              className="md:h-[200px] md:w-full"
              src={list.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{list.name}</h2>
            <p>
              <span className="font-bold">Fall_semester: </span>
              {list.admission_dates.fall_semester}
            </p>
            <p>
              <span className="font-bold">Spring_semester: </span>
              {list.admission_dates.spring_semester}
            </p>
            <p>
              <span className="font-bold">Events: </span>
              {list.events}
            </p>
            <p>
              <span className="font-bold">Research_history: </span>
              {list.research_history}
            </p>
            <p>
              <span className="font-bold">Sports: </span>
              {list.sports}
            </p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      ))}

      
    </div>
    {/* Show All button */}
    {!showAll && collageList.length > 3 && (
        <div className="flex justify-center mt-5">
          <button className="btn btn-primary" onClick={handleShowAll}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
