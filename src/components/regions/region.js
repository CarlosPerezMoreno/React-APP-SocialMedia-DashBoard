import React from "react";
import { useDispatch, useSelector } from "react-redux";

const filterByRegionAction = (regionSelected) => {
  return {
    type: "FILTER_BY_REGION",
    payload: { regionSelected },
  };
};

export const Region = () => {
  const dispatch = useDispatch();
  const filterByRegion = useSelector((state) => state.filterByRegion);

  const onRegionChange = (event) => {
    const value = event.target.value;

    dispatch(filterByRegionAction(value));
  };

  return (
    <select onChange={onRegionChange} value={filterByRegion}>
      <option value="">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
