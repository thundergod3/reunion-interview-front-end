import React, { useEffect } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux";
import PropertiesAction from "stores/redux/actions/PropertiesAction";

import Header from "components/Header";
import Layout from "components/Layout";
import PropertyList from "components/PropertyList";
import SearchBar from "components/SearchBar";

const Homepage = () => {
  const loadingPropertyList = useSelector(
    (state) => state?.propertiesReducer?.propertyList?.loading,
    shallowEqual
  );
  const propertyList = useSelector(
    (state) => state?.propertiesReducer?.propertyList?.data,
    shallowEqual
  );
  const dispatch = useDispatch();
  const { getPropertyListRequest } = PropertiesAction;

  useEffect(() => {
    dispatch(getPropertyListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <SearchBar />
      <Layout title='Search properties to rent' noMargin>
        <Header />
        <PropertyList data={propertyList} loading={loadingPropertyList} />
      </Layout>
    </div>
  );
};

export default Homepage;
