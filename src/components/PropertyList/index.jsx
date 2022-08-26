import React, { Fragment } from "react";

import PropertyCard from "components/PropertyCard";
import Loading from "components/Loading";

import "./styles.scss";

const PropertyList = ({ data, loading }) => (
  <div className='property-list-container'>
    {loading ? (
      <div className='property-list-empty-container'>
        <Loading />
      </div>
    ) : !data?.length ? (
      <div className='property-list-empty-container'>
        <p>No data</p>
      </div>
    ) : (
      <div className='property-list-wrapper'>
        {data.map((record) => (
          <Fragment key={record?.id}>
            <PropertyCard {...record} />
          </Fragment>
        ))}
      </div>
    )}
  </div>
);

export default PropertyList;
