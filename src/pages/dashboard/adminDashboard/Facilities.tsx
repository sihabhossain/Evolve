import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAddNewFacilityMutation } from "@/redux/features/facilities/facilitiesApi";
import { useAppSelector } from "@/redux/store/hooks";
import React, { useState } from "react";
import { toast } from "sonner";

const AddFacility: React.FC = () => {
  const token = useAppSelector(useCurrentToken);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    pricePerHour: "",
    location: "",
  });

  const [addNewFacility, { isLoading, isSuccess, isError, error }] =
    useAddNewFacilityMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare data
    const facilityData = {
      name: formData.name,
      description: formData.description,
      image: formData.image,
      pricePerHour: parseFloat(formData.pricePerHour),
      location: formData.location,
    };

    console.log(facilityData);

    try {
      // Call the mutation function
      await addNewFacility({ token, facilityData }).unwrap();
      // Handle success (e.g., show a success message or reset the form)
      toast.success("Facility added successfully");
      setFormData({
        name: "",
        description: "",
        image: "",
        pricePerHour: "",
        location: "",
      });
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 text-gray-100">
      <h2 className="mb-6 text-2xl font-semibold">Add New Facility</h2>
      <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="number"
            name="pricePerHour"
            placeholder="Price Per Hour"
            value={formData.pricePerHour}
            onChange={handleChange}
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Facility"}
          </button>
          {isError && (
            <div className="text-red-500">Error: {"Something went wrong"}</div>
          )}
          {isSuccess && (
            <div className="text-green-500">Facility added successfully!</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddFacility;
