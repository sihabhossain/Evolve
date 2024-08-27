import React from "react";

const FacilitiesPage: React.FC = () => {
  // Sample static data with images
  const facilities = [
    {
      title: "Football Field",
      description: "A large field for playing football.",
      pricePerHour: "$50",
      location: "North Park",
      isDeleted: false,
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "Tennis Court",
      description: "A court for playing tennis.",
      pricePerHour: "$30",
      location: "East Park",
      isDeleted: false,
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    {
      title: "Basketball Court",
      description: "A court for playing basketball.",
      pricePerHour: "$40",
      location: "West Park",
      isDeleted: true,
      image: "https://via.placeholder.com/100", // Placeholder image URL
    },
    // Add more sample data as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-4 text-gray-100">
      <h2 className="mb-6 text-2xl font-semibold">Facility Management</h2>

      {/* Add New Facility Form */}
      <div className="mb-8 rounded-lg bg-gray-800 p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-semibold">Add New Facility</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <textarea
            placeholder="Description"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
            rows={3}
          />
          <input
            type="text"
            placeholder="Price Per Hour"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full rounded border border-gray-700 bg-gray-700 p-2 text-gray-100"
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Add Facility
          </button>
        </form>
      </div>

      {/* Facilities List */}
      <div className="rounded-lg bg-gray-800 p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-semibold">Facilities List</h3>
        <div className="overflow-x-auto">
          <div className="max-h-[60vh] overflow-y-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-2 py-2 text-left text-sm font-medium text-gray-100">
                    Image
                  </th>
                  <th className="px-2 py-2 text-left text-sm font-medium text-gray-100">
                    Title
                  </th>
                  <th className="px-2 py-2 text-left text-sm font-medium text-gray-100">
                    Description
                  </th>
                  <th className="px-2 py-2 text-left text-sm font-medium text-gray-100">
                    Price Per Hour
                  </th>
                  <th className="px-2 py-2 text-left text-sm font-medium text-gray-100">
                    Location
                  </th>
                  <th className="px-2 py-2 text-left text-sm font-medium text-gray-100">
                    Status
                  </th>
                  <th className="px-2 py-2 text-left text-sm font-medium text-gray-100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 bg-gray-800">
                {facilities.map((facility, index) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className="px-2 py-2 text-sm">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="h-20 w-20 rounded object-cover"
                      />
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-300">
                      {facility.title}
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-300">
                      {facility.description}
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-300">
                      {facility.pricePerHour}
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-300">
                      {facility.location}
                    </td>
                    <td className="px-2 py-2 text-sm">
                      {facility.isDeleted ? (
                        <span className="text-red-500">Deleted</span>
                      ) : (
                        <span className="text-green-500">Active</span>
                      )}
                    </td>
                    <td className="px-2 py-2 text-sm">
                      <div className="flex justify-center space-x-2">
                        <button className="text-blue-500 hover:text-blue-700">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
