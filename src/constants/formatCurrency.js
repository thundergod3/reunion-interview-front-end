import numeral from "numeral";

const formatCurrency = (value = "") =>
  numeral(Number.parseInt(`${value}`.split(",").join(""))).format("0,0");

export default formatCurrency;
