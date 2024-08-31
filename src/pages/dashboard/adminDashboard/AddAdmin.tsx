import { useSignupMutation } from "@/redux/features/auth/authApi";
import React, { useState } from "react";
import { toast } from "sonner";

const AddAdminPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "admin",
  });

  const [signup] = useSignupMutation();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(formData);
      toast.success("Admin created successfully");
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        role: "",
      });
    } catch (error) {
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 text-gray-100">
      <h2 className="mb-6 text-2xl font-semibold">Add New Admin</h2>

      {/* Add New Admin Form */}
      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-semibold">Create Admin Account</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
            rows={3}
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
