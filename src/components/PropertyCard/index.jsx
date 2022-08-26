import React, { useCallback } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { TbBath } from "react-icons/tb";
import { BsFillHouseFill } from "react-icons/bs";

import { useDispatch } from "react-redux";
import PropertiesAction from "stores/redux/actions/PropertiesAction";

import formatCurrency from "constants/formatCurrency";

import "./styles.scss";

const PropertyCard = (props) => {
  const { id, ...rest } = props;
  const { image, price, name, location, isFavorite, bedQty, bathQty, area } =
    rest;
  const dispatch = useDispatch();
  const { updatePropertyListRequest } = PropertiesAction;

  const handleFavoriteProperty = useCallback(() => {
    dispatch(
      updatePropertyListRequest(id, {
        ...rest,
        isFavorite: !isFavorite,
      })
    );
  }, [dispatch, id, isFavorite, rest, updatePropertyListRequest]);

  return (
    <div className='property-card-container'>
      <img src={image} alt={name} />
      <div className='property-card-bio-container'>
        <div className='property-card-bio-header-container'>
          <p className='property-card-price'>
            {formatCurrency(price)} <span>/month</span>
          </p>
          <button
            type='button'
            className='property-card-favorite-button'
            onClick={handleFavoriteProperty}>
            {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
        </div>
        <p className='property-card-name'>{name}</p>
        <p className='property-card-location'>{location}</p>
        <hr />
        <div className='property-card-footer-container'>
          <div className='property-card-footer-item'>
            <BiBed />
            <p>{`${bedQty} ${bedQty > 1 ? "Beds" : "Bed"}`} </p>
          </div>
          <div className='property-card-footer-item'>
            <TbBath />
            <p>{`${bathQty} ${bathQty > 1 ? "Beds" : "Bed"}`} </p>
          </div>
          <div className='property-card-footer-item'>
            <BsFillHouseFill />
            <p>{area} m&#178;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
