import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  console.log(user)

  if (!user?.role) return null;

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {user?.role === "Seller" && <>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/dashboard/addproduct">Add Product</Link>
              </li>
              <li>
                <Link to="/dashboard/myproduct">My Product</Link>
              </li>
            </>}
            {user?.role === "User" && <li>
              <Link to="/dashboard/orders">My Orders</Link>
            </li>}
            {user?.role === "Admin" && <>
              <li>
                <Link to="/dashboard/sellers">All Seller </Link>
              </li>
              <li>
                <Link to="/dashboard/buyers">All Buyers </Link>
              </li>
            </>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
