/* eslint-disable no-unused-vars */
// import React from "react";
import { useEffect } from "react";
import {
  Login,
  Signup,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
} from "../routes";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { server } from "./server";
import axios from "axios";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import { useSelector } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Sign-up" element={<Signup />} />
      <Route
        path="/activation/:activation_token"
        element={<ActivationPage />}
      />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/best-selling" element={<BestSellingPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/faq" element={<FAQPage />} />
    </Route>
  )
);

const App = () => {
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <>
      {loading ? null : (
        <RouterProvider router={router}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </RouterProvider>
      )}
    </>
  );
};

export default App;
