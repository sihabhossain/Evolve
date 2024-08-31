import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FacilityCard from "@/components/facilityCard/FacilityCard";
import SearchAndFilters from "@/components/search&filter/SearchAndFilters";
import { useGetAllFacilitiesQuery } from "@/redux/features/facilities/facilitiesApi";
import { Facility } from "@/types/types";

const FacilityListingPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    data: facilitiesData,
    error,
    isLoading,
  } = useGetAllFacilitiesQuery(undefined);
  const [filteredFacilities, setFilteredFacilities] = useState<Facility[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number[]>([0, Infinity]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const facilitiesPerPage = 9;

  useEffect(() => {
    if (facilitiesData) {
      filterFacilities(searchQuery, priceRange);
    }
  }, [facilitiesData, searchQuery, priceRange]);

  const filterFacilities = useCallback(
    (query: string, price: number[]) => {
      const filtered = facilitiesData?.data?.filter((facility: Facility) => {
        const matchesSearch = facility.name
          .toLowerCase()
          .includes(query.toLowerCase());
        const matchesPrice =
          facility.pricePerHour >= price[0] &&
          facility.pricePerHour <= price[1];
        return matchesSearch && matchesPrice;
      });
      setFilteredFacilities(filtered || []);
    },
    [facilitiesData]
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleFilter = (priceRange: number[]) => {
    setPriceRange(priceRange);
    setCurrentPage(1); // Reset to first page on filter
  };

  const handleViewDetails = (id: string) => navigate(`/facilities/${id}`);

  // Pagination logic
  const indexOfLastFacility = currentPage * facilitiesPerPage;
  const indexOfFirstFacility = indexOfLastFacility - facilitiesPerPage;
  const currentFacilities = filteredFacilities.slice(
    indexOfFirstFacility,
    indexOfLastFacility
  );
  const totalPages = Math.ceil(filteredFacilities.length / facilitiesPerPage);

  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading facilities</div>;

  return (
    <div className="container mx-auto mt-20 p-4">
      <SearchAndFilters onSearch={handleSearch} onFilter={handleFilter} />
      <div className="lg:grid-cols-4 mb-20 mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {currentFacilities.length === 0 ? (
          <div>No facilities found</div>
        ) : (
          currentFacilities.map((facility) => (
            <FacilityCard
              key={facility._id}
              id={facility._id}
              image={facility.image}
              name={facility.name}
              pricePerHour={facility.pricePerHour}
              description={facility.description}
              onViewDetails={handleViewDetails}
            />
          ))
        )}
      </div>
      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center">
        <button
          className="mx-2 rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="mx-2 rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FacilityListingPage;
