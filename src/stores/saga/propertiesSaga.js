import { takeLatest, put, call } from "redux-saga/effects";

import PropertiesService from "services/PropertiesService";

import * as types from "constants/types";

import PropertiesAction from "stores/redux/actions/PropertiesAction";

function* getPropertyList({ queryFilter = {} }) {
  try {
    const { location, propertyType, minPrice, maxPrice, moveTime } =
      queryFilter;
    let formatQueryFilter = "";

    if (location) formatQueryFilter += `&location=${location}`;
    if (propertyType) formatQueryFilter += `&propertyType=${propertyType}`;
    if (minPrice)
      formatQueryFilter += `&minPrice=${
        minPrice === "No Min" ? "no_min" : minPrice
      }`;
    if (maxPrice)
      formatQueryFilter += `&maxPrice=${
        maxPrice === "No Max" ? "no_max" : maxPrice
      }`;
    if (moveTime) formatQueryFilter += `&moveTime=${moveTime}`;

    const { data } = yield call(PropertiesService.getPropertyList, {
      queryFilter: formatQueryFilter,
    });

    yield put(PropertiesAction.getPropertyListSucceeded(data));
  } catch (error) {
    yield put(
      PropertiesAction.getPropertyListFailed(error?.response?.data?.msg)
    );
    console.log(error);
  }
}

function* getFavoritePropertyList() {
  try {
    const { data } = yield call(PropertiesService.getFavoritePropertyList);

    yield put(PropertiesAction.getFavoritePropertyListSucceeded(data));
  } catch (error) {
    yield put(
      PropertiesAction.getFavoritePropertyListFailed(error?.response?.data?.msg)
    );
    console.log(error);
  }
}

function* updateProperty({ id, formData }) {
  try {
    const { data } = yield call(PropertiesService.updateProperty, {
      id,
      formData,
    });

    yield put(PropertiesAction.updatePropertyListSucceeded(data));
  } catch (error) {
    yield put(
      PropertiesAction.updatePropertyListFailed(error?.response?.data?.msg)
    );
    console.log(error);
  }
}

export default function* propertiesSaga() {
  yield takeLatest(types.GET_PROPERTY_LIST.REQUEST, getPropertyList);
  yield takeLatest(
    types.GET_FAVORITE_PROPERTY_LIST.REQUEST,
    getFavoritePropertyList
  );
  yield takeLatest(types.UPDATE_PROPERTY.REQUEST, updateProperty);
}
