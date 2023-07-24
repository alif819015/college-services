import { Squash as Hamburger } from "hamburger-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navList = (
    <ul className="md:flex gap-4 md:text-lg font-bold">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/colleges">Colleges</Link></li>
      <li><Link to="/admission">Admission</Link></li>
      <li><Link to="/myCollege">My College</Link></li>
    </ul>
  );
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label className="btn btn-ghost lg:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} distance="sm" />
          </label>
          {isOpen && (
            <ul className="p-2 shadow-purple-200 menu dropdown-content z-10 bg-[#da08a2] rounded-box w-auto">
              {navList}
            </ul>
          )}
        </div>
        <a className="btn btn-ghost normal-case text-xl font-bold">UniBookJunction</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end flex gap-4">
        {user ? (
          <>
            <button>
              <Link onClick={handleLogOut}>Logout</Link>
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        {user && (
          <div className="avatar online">
            <div className="w-10 rounded-full">
              <img title={user?.displayName} src={user?.photoURL} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
