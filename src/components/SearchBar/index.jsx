import React, { useCallback, useState } from "react";

import { useDispatch } from "react-redux";
import PropertiesAction from "stores/redux/actions/PropertiesAction";

import { propertyTypeList } from "./constants";

import FormControl from "components/FormControl";
import InputField from "components/InputField";
import SelectField from "components/SelectField";
import DatePicker from "components/DatePicker";
import PriceRange from "components/PriceRange";

import "./styles.scss";

const SearchBar = () => {
  const dispatch = useDispatch();
  const { getPropertyListRequest } = PropertiesAction;

  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [moveTime, setMoveTime] = useState("");
  const [priceRange, setPriceRange] = useState({
    minPrice: "",
    maxPrice: "",
  });

  const handleOnSearch = useCallback(() => {
    dispatch(
      getPropertyListRequest({
        location,
        propertyType,
        moveTime,
        ...priceRange,
      })
    );
  }, [
    dispatch,
    getPropertyListRequest,
    location,
    moveTime,
    priceRange,
    propertyType,
  ]);

  return (
    <div className='search-bar-container'>
      <FormControl label='Location'>
        <InputField
          value={location}
          placeholder='Enter location'
          onChange={(value) => setLocation(value)}
        />
      </FormControl>
      <FormControl label='Property Type'>
        <SelectField
          value={propertyType}
          placeholder='Select a type'
          options={propertyTypeList}
          onChange={(value) => setPropertyType(value)}
        />
      </FormControl>
      <FormControl label='When'>
        <DatePicker
          value={moveTime}
          placeholder='Select Move-in Date'
          onChange={(value) => setMoveTime(value)}
        />
      </FormControl>
      <FormControl label='Price'>
        <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />
      </FormControl>
      <button type='button' className='search-bar-btn' onClick={handleOnSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
