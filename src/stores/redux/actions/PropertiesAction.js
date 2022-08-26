import * as types from "constants/types";

class PropertiesAction {
  getPropertyListRequest = (queryFilter) => ({
    type: types.GET_PROPERTY_LIST.REQUEST,
    queryFilter,
  });
  getPropertyListSucceeded = (propertyList) => ({
    type: types.GET_PROPERTY_LIST.SUCCEEDED,
    propertyList,
  });
  getPropertyListFailed = (error) => ({
    type: types.GET_PROPERTY_LIST.FAILED,
    error,
  });

  getFavoritePropertyListRequest = () => ({
    type: types.GET_FAVORITE_PROPERTY_LIST.REQUEST,
  });
  getFavoritePropertyListSucceeded = (favoritePropertyList) => ({
    type: types.GET_FAVORITE_PROPERTY_LIST.SUCCEEDED,
    favoritePropertyList,
  });
  getFavoritePropertyListFailed = (error) => ({
    type: types.GET_FAVORITE_PROPERTY_LIST.FAILED,
    error,
  });

  updatePropertyListRequest = (id, formData) => ({
    type: types.UPDATE_PROPERTY.REQUEST,
    id,
    formData,
  });
  updatePropertyListSucceeded = (data) => ({
    type: types.UPDATE_PROPERTY.SUCCEEDED,
    data,
  });
  updatePropertyListFailed = (error) => ({
    type: types.UPDATE_PROPERTY.FAILED,
    error,
  });
}

export default new PropertiesAction();
