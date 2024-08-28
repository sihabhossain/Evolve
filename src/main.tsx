import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MainLayout from "./layout/MainLayout";
import AboutPage from "./pages/about/About";
import ContactPage from "./pages/contact/Contact";
import ErrorPage from "./pages/error/Error";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import AuthPage from "./pages/auth/AuthPage";
import DashboardLayout from "./layout/DashboardLayout";
import MyBookings from "./pages/dashboard/userDashboard/MyBookings";
import HomePage from "./pages/dashboard/Home";
import BookingsPage from "./pages/dashboard/adminDashboard/Bookings";
import CreateAdminPage from "./pages/dashboard/adminDashboard/AddAdmin";
import FacilitiesPage from "./pages/dashboard/adminDashboard/Facilities";
import FacilityListingPage from "./pages/facilities/FacilityListingPage";
import FacilityDetailsPage from "./pages/facilities/FacilityDetailsPage"; // Import FacilityDetailsPage
import BookingPage from "./pages/booking/BookingPage";
import ScrollToTopButton from "./components/scrollToTop/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/login",
        element: <AuthPage />,
      },
      {
        path: "/facilities",
        element: <FacilityListingPage />,
      },
      {
        path: "/facilities/:id",
        element: <FacilityDetailsPage />,
      },
      {
        path: "/booking",
        element: <BookingPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <HomePage />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "bookings",
        element: <BookingsPage />,
      },
      {
        path: "add-admin",
        element: <CreateAdminPage />,
      },
      {
        path: "facilities",
        element: <FacilitiesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ScrollToTopButton />
    </Provider>
  </React.StrictMode>
);
