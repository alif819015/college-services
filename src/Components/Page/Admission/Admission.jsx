import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [collageList, setCollageList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setCollageList(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto md:mx-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th></th>
              <th>Name</th>
              <th>Location</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody>
            {collageList.map((list, index) => (
              <tr key={list._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={list.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{list.name}</td>
                <td>{list.location}</td>
                <td>
                  <Link to="/form">
                    <button>Click Here</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;
