import React, { useEffect, useState, useRef } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";

import formatCurrency from "constants/formatCurrency";

import InputField from "components/InputField";

import "./styles.scss";
import { priceSuggestionList } from "./constants";

const PriceRange = ({ priceRange, setPriceRange }) => {
  const [showPriceRangeForm, setShowPriceRangeForm] = useState(false);
  const [showPriceSuggestion, setShowPriceSuggestion] = useState("");

  const priceRangeFormRef = useRef();

  const handleOutSideClick = (event) => {
    if (
      showPriceRangeForm ||
      (priceRangeFormRef.current &&
        priceRangeFormRef.current.contains(event.target))
    )
      return;
    else {
      setShowPriceRangeForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutSideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='price-range-container'>
      <div
        className='price-range-wrapper'
        onClick={() => setShowPriceRangeForm(true)}>
        <p className='price-range-value'>
          {!priceRange.minPrice && !priceRange.maxPrice
            ? "Select range"
            : `${
                !priceRange.minPrice
                  ? "Select range"
                  : `${formatCurrency(priceRange.minPrice) === "0" ? "" : "$"}${
                      priceRange.minPrice
                    }`
              } - ${
                !priceRange.maxPrice
                  ? "Select range"
                  : `${formatCurrency(priceRange.maxPrice) === "0" ? "" : "$"}${
                      priceRange.maxPrice
                    }`
              }`}
        </p>
        {showPriceRangeForm ? <VscChevronUp /> : <VscChevronDown />}
      </div>
      {showPriceRangeForm && (
        <div className='price-range-form-container' ref={priceRangeFormRef}>
          <div className='price-range-form-header'>
            <div
              className='price-range-form-input'
              onFocus={() => setShowPriceSuggestion("min")}>
              <InputField
                type='variant'
                value={
                  formatCurrency(priceRange.minPrice)
                    ? priceRange.minPrice
                    : formatCurrency(priceRange.minPrice)
                }
                onChange={(value) =>
                  setPriceRange({
                    ...priceRange,
                    minPrice: value,
                  })
                }
                placeholder='Min'
              />
            </div>
            <p>~</p>
            <div
              className='price-range-form-input'
              onFocus={() => setShowPriceSuggestion("max")}>
              <InputField
                type='variant'
                value={
                  formatCurrency(priceRange.maxPrice)
                    ? priceRange.maxPrice
                    : formatCurrency(priceRange.maxPrice)
                }
                onChange={(value) =>
                  setPriceRange({
                    ...priceRange,
                    maxPrice: value,
                  })
                }
                placeholder='Max'
              />
            </div>
          </div>
          {showPriceSuggestion && (
            <div className='price-range-form-suggestion-container'>
              <div
                className='price-range-form-suggestion-item'
                onClick={() =>
                  setPriceRange(
                    showPriceSuggestion === "min"
                      ? {
                          ...priceRange,
                          minPrice: "No Min",
                        }
                      : {
                          ...priceRange,
                          maxPrice: "No Max",
                        }
                  )
                }>
                <p>{showPriceSuggestion === "min" ? "No Min." : "No Max."}</p>
              </div>
              {priceSuggestionList?.map((record) => (
                <div
                  key={record?.value}
                  className='price-range-form-suggestion-item'
                  onClick={() =>
                    setPriceRange(
                      showPriceSuggestion === "min"
                        ? {
                            ...priceRange,
                            minPrice: formatCurrency(record?.value),
                          }
                        : {
                            ...priceRange,
                            maxPrice: formatCurrency(record?.value),
                          }
                    )
                  }>
                  <p>{record?.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PriceRange;
