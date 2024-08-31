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

  const handleSearch = (query: string) => setSearchQuery(query);

  const handleFilter = (priceRange: number[]) => setPriceRange(priceRange);

  const handleViewDetails = (id: string) => navigate(`/facilities/${id}`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading facilities</div>;

  return (
    <div className="container mx-auto mt-20 p-4">
      <SearchAndFilters onSearch={handleSearch} onFilter={handleFilter} />
      <div className="lg:grid-cols-4 mb-20 mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {filteredFacilities.length === 0 ? (
          <div>No facilities found</div>
        ) : (
          filteredFacilities.map((facility) => (
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
    </div>
  );
};

export default FacilityListingPage;
