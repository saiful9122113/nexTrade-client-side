import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";


const Login = () => {
  const {setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  if(token){
    navigate('/')
  }

  const location = useLocation();
    const from = location.state?.from.pathname || '/';

  const {googleSignIn, login} =useContext(AuthContext);
  const [error, setError] = useState('');

  const getUserFromDB = async(email) => {
    try {
      const data = await fetch("http://localhost:5000/get-user-info/" + email, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })

      const userInfo = await data.json();
      setUser(userInfo)
      localStorage.setItem("user-info", JSON.stringify(userInfo))
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogin = async(event) => {
    event.preventDefault();
    try {
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      
      await login(email, password)
      setCreatedUserEmail(email);

      await getUserFromDB(email);
    } catch (error) {
      console.log(error)
    }
  };

  const handleGoogleSignIn = () =>{
    googleSignIn()
        .then(result=>{
            const user = result.user;
            // console.log(user.email);
            setError('')
            // navigate(from,{replace:true})
            const name = user.displayName;
            const email = user.email;
            const role = "User";
            
            const roleInfo = {
              role,
              name,
              email,
            };
            fetch("http://localhost:5000/user-role", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(roleInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                setUser(data);
                setCreatedUserEmail(email);
                localStorage.setItem("user-info", JSON.stringify(data))
              })
              .catch((er) => console.error(er));
        })
        .catch((error)=>{
            console.log(error);
            setError(error.message)
        })
  }

  return (
    <div className="hero bg-gray-700">
      <div className="hero-content w-3/4 flex-col">
        <h1 className="text-4xl font-bold">Login Now!</h1>
        <div className="card px-10 sm:w-full md:w-3/4 lg:w-3/4 shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Log In" />
            </div>
          </form>
          <p className="text-center mb-3">Or, Sign in with..</p>
          <div className="text-center my-4">
          <button onClick={handleGoogleSignIn} className='w-1/3  btn btn-primary'><FaGoogle className="mr-1"></FaGoogle> Login with Google</button>
          <p className="text-red-600">{error}</p>
          </div>
          <p className="text-center mb-5">
            New to CorePhotography? Please, {''}
            <Link className="text-orange-600 font-bold" to="/signup" href="">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
