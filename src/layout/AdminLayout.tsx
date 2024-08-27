import { useState } from "react";
import { Menu, X, Home, BarChart, Settings } from "lucide-react";

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative flex h-screen bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-800 text-gray-100 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:w-64 md:translate-x-0`}
      >
        <div className="flex items-center justify-between bg-gray-700 p-4">
          <h2 className="text-lg font-semibold">Admin Dashboard</h2>
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
                href="/admin/home"
                className="flex items-center rounded p-2 text-gray-300 hover:bg-green-600 hover:text-gray-100"
              >
                <Home size={20} className="mr-2" /> Home
              </a>
            </li>
            <li>
              <a
                href="/admin/reports"
                className="flex items-center rounded p-2 text-gray-300 hover:bg-blue-600 hover:text-gray-100"
              >
                <BarChart size={20} className="mr-2" /> Reports
              </a>
            </li>
            <li>
              <a
                href="/admin/settings"
                className="flex items-center rounded p-2 text-gray-300 hover:bg-orange-600 hover:text-gray-100"
              >
                <Settings size={20} className="mr-2" /> Settings
              </a>
            </li>
            {/* Add more admin-specific links here */}
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

          <h2>Admin Dashboard</h2>
        </div>
        <div>HELLO WORLD</div>
        {/* Add Outlet here if needed */}
      </div>
    </div>
  );
};

export default AdminLayout;
