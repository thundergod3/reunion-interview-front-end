import React, { useEffect } from "react";

import { shallowEqual, useSelector, useDispatch } from "react-redux";
import PropertiesAction from "stores/redux/actions/PropertiesAction";

import Header from "components/Header";
import Layout from "components/Layout";
import PropertyList from "components/PropertyList";

const FavoritePropertyPage = () => {
  const loadingFavoritePropertyList = useSelector(
    (state) => state?.propertiesReducer?.favoritePropertyList?.loading,
    shallowEqual
  );
  const favoritePropertyList = useSelector(
    (state) => state?.propertiesReducer?.favoritePropertyList?.data,
    shallowEqual
  );
  const dispatch = useDispatch();
  const { getFavoritePropertyListRequest } = PropertiesAction;

  useEffect(() => {
    dispatch(getFavoritePropertyListRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout title='Favorite Property'>
      <Header />
      <PropertyList
        data={favoritePropertyList}
        loading={loadingFavoritePropertyList}
      />
    </Layout>
  );
};

export default FavoritePropertyPage;
