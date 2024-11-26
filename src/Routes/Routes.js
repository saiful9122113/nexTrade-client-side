import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import AllSeller from "../Pages/DashBoard/AllSeller/AllSeller"
import Blogs from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import MyProduct from "../Pages/DashBoard/MyProduct/MyProduct";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Signup from "../Pages/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import AllBuyers from "../Pages/DashBoard/AllBuyers/AllBuyers";
import CategoryWiseDataFetch from "../Pages/CategoryData/CategoryWiseDataFetch/CategoryWiseDataFetch";
import ProductDetails from "../Pages/product/details";
import PurchasePage from "../Pages/payment/purchase";
import axios from "axios";
import SearchProduct from "../Pages/SearchProduct/SearchProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/products/:name",
        element: <SearchProduct />,
        loader: async ({ params }) => {
          const { name } = params; 
          const { data } = await axios.get(`http://localhost:5000/search-product/${name}`);
          return data; 
        },
      },
      {
        path: "/category/:id", // Single dynamic route
        element: (
          <PrivateRoute>
            <CategoryWiseDataFetch></CategoryWiseDataFetch>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id/products/:productId", // Single dynamic route
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:id/products/:productId/purchase", // Single dynamic route
        element: (
          <PrivateRoute>
            <PurchasePage />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const { productId } = params; 
          const { data } = await axios.get(`http://localhost:5000/single-product/${productId}`);
          return data; 
        },
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: "/dashboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProduct />,
      },
      {
        path: "/dashboard/orders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/sellers",
        element: <AllSeller />,
      },
      {
        path: "/dashboard/buyers",
        element: <AllBuyers />,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

export default router;

  