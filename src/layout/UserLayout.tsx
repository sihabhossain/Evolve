// UserLayout.jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, Calendar, User } from "lucide-react";

const UserLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 transform bg-gray-800 text-gray-100 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } z-40 md:relative md:translate-x-0`}
      >
        <div className="flex items-center justify-between bg-gray-700 p-4">
          <h2 className="text-lg font-semibold">User Dashboard</h2>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="transform text-gray-100 transition-transform duration-300 hover:rotate-90 md:hidden"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className="p-4">
          <ul>
            <li>
              <a
                href="/user/home"
                className="flex items-center rounded p-2 text-gray-300 hover:bg-gray-700 hover:text-gray-100"
              >
                <Home size={20} className="mr-2" /> Home
              </a>
            </li>
            <li>
              <a
                href="/user/appointments"
                className="flex items-center rounded p-2 text-gray-300 hover:bg-gray-700 hover:text-gray-100"
              >
                <Calendar size={20} className="mr-2" /> Appointments
              </a>
            </li>
            <li>
              <a
                href="/user/profile"
                className="flex items-center rounded p-2 text-gray-300 hover:bg-gray-700 hover:text-gray-100"
              >
                <User size={20} className="mr-2" /> Profile
              </a>
            </li>
            {/* Add more user-specific links here */}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div
        className={`flex-1 bg-gray-900 p-6 transition-transform duration-300 ${
          isSidebarOpen ? "md:ml-64" : "md:ml-0"
        }`}
      >
        <div className="mb-10 flex items-center justify-between md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="transform text-gray-100 transition-transform duration-300 hover:rotate-90"
          >
            <Menu size={24} />
          </button>
          <h2>User Dashboard</h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;
