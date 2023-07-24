import { useEffect, useState } from "react";
import CollageCard from "./CollageCard";

const College = () => {
  const [collageList, setCollageList] = useState([]);
useEffect(() =>{
  fetch("http://localhost:5000/users")
  .then((res) => res.json())
  .then(data => setCollageList(data))
})

    return (
      <div className="grid md:grid-cols-4 gap-4 my-4 mx-5">
          {
            collageList.map((list)=> <CollageCard key={list._id} list={list}></CollageCard>)
          }
        </div>
    );
};

export default College;