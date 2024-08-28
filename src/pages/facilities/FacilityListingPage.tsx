import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import FacilityCard from "@/components/facilityCard/FacilityCard";
import SearchAndFilters from "@/components/search&filter/SearchAndFilters";

interface Facility {
  id: string;
  image: string;
  name: string;
  pricePerHour: number;
  description: string;
}

const FacilityListingPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [facilities, setFacilities] = React.useState<Facility[]>([
    // Example data
    {
      id: "1",
      image:
        "https://plus.unsplash.com/premium_photo-1663039984787-b11d7240f592?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tennis Court",
      pricePerHour: 30,
      description: "Outdoor tennis court with synthetic surface.",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1496033604106-04799291ee86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Swimming Pool",
      pricePerHour: 50,
      description: "Olympic-sized pool with heated water.",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1529887158701-161d0eb81a6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Basketball Court",
      pricePerHour: 40,
      description: "Indoor court with hardwood flooring.",
    },
  ]);

  const handleSearch = (query: string) => {
    const filteredFacilities = facilities.filter((facility) =>
      facility.name.toLowerCase().includes(query.toLowerCase())
    );
    setFacilities(filteredFacilities);
  };

  const handleFilter = (priceRange: number[]) => {
    const filteredFacilities = facilities.filter(
      (facility) =>
        facility.pricePerHour >= priceRange[0] &&
        facility.pricePerHour <= priceRange[1]
    );
    setFacilities(filteredFacilities);
  };

  const handleViewDetails = (id: string) => {
    navigate(`/facilities/${id}`); // Navigate to the details page
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <SearchAndFilters onSearch={handleSearch} onFilter={handleFilter} />
      <div className="lg:grid-cols-4 mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard
            key={facility.id}
            id={facility.id}
            image={facility.image}
            name={facility.name}
            pricePerHour={facility.pricePerHour}
            description={facility.description}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default FacilityListingPage;
