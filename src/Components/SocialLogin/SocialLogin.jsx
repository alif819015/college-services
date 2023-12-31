import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const {  googleLogin, githubUser } = useContext(AuthContext)

    const handleGoogle = () => {
        googleLogin()
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);

            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
          fetch("https://assignment-12-summer-camp-server-alif819015.vercel.app/users",{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                
                navigate(from, { replace: true });
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handleGithub = () => {
        githubUser()
          .then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser);
            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
          fetch("https://assignment-12-summer-camp-server-alif819015.vercel.app/users",{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then(() => {
                navigate(from, { replace: true });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <div>
          <div className="flex gap-4 text-3xl mx-auto">
              <FaGoogle
                onClick={handleGoogle}
                className="text-blue-600"
              ></FaGoogle>
              <FaGithub onClick={handleGithub}></FaGithub>
            </div>  
        </div>
    );
};

export default SocialLogin;