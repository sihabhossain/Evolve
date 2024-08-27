import React from "react";

const AddAdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-4 text-gray-100">
      <h2 className="mb-6 text-2xl font-semibold">Add New Admin</h2>

      {/* Add New Admin Form */}
      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-semibold">Create Admin Account</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <textarea
            placeholder="Address"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
            rows={3}
          />
          <input
            type="hidden"
            value="admin" // Role is automatically set to "admin"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Add Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdminPage;
