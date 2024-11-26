import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [selectedRole, setSelectedRole] = useState("User");

  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);
  if(token){
    navigate('/');
  }

  const saveUserInDB = async(info) => {
    try {
      const data = await fetch("http://localhost:5000/user-role", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
    const userInfo = await data.json();
    console.log(userInfo);
    setUser(userInfo);
    setCreatedUserEmail(info.email);
    localStorage.setItem("user-info", JSON.stringify(userInfo))
    } catch (error) {
      console.error(error)
    }
  }

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = selectedRole;

    const roleInfo = {
      role,
      name,
      email,
      password,
    };

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        saveUserInDB(roleInfo)

        const userInfo = {
          displayName: name,
        };

        updateUser(userInfo)
          .then(() => {
            toast("User Created Successfully");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.error(err));
  };

  const handleRole = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="hero bg-gray-700">
      <div className="hero-content w-3/4 flex-col">
        <h1 className="text-4xl font-bold">Sign Up</h1>
        <div className="card px-10 sm:w-full md:w-3/4 lg:w-3/4 mb-6 shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <div>
              <label className="label">
                <span className="label-text">Set Your Role</span>
              </label>
              <select
                defaultValue={"User"}
                className="select select-bordered w-full"
                onChange={handleRole}
              >
                <option value={"User"}>User</option>
                <option value={"Seller"}>Seller</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center">
            Already have an account? Please,{" "}
            <Link className="text-orange-600 font-bold" to="/login" href="">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
