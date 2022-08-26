import produce from "immer";

import * as types from "constants/types";

const initialState = {
  propertyList: {
    loading: false,
    data: [],
    error: "",
  },
  favoritePropertyList: {
    loading: false,
    data: [],
    error: "",
  },
  updateProperty: {
    loading: false,
    error: "",
  },
};

const propertiesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_PROPERTY_LIST.REQUEST: {
        draft.propertyList.loading = true;
        break;
      }
      case types.GET_PROPERTY_LIST.SUCCEEDED: {
        draft.propertyList.data = action.propertyList;
        draft.propertyList.loading = false;
        draft.propertyList.error = "";
        break;
      }
      case types.GET_PROPERTY_LIST.FAILED: {
        draft.propertyList.loading = false;
        draft.propertyList.error = action.error;
        break;
      }

      case types.GET_FAVORITE_PROPERTY_LIST.REQUEST: {
        draft.favoritePropertyList.loading = true;
        break;
      }
      case types.GET_FAVORITE_PROPERTY_LIST.SUCCEEDED: {
        draft.favoritePropertyList.data = action.favoritePropertyList;
        draft.favoritePropertyList.loading = false;
        draft.favoritePropertyList.error = "";
        break;
      }
      case types.GET_FAVORITE_PROPERTY_LIST.FAILED: {
        draft.favoritePropertyList.loading = false;
        draft.favoritePropertyList.error = action.error;
        break;
      }

      case types.UPDATE_PROPERTY.REQUEST: {
        draft.updateProperty.loading = true;
        break;
      }
      case types.UPDATE_PROPERTY.SUCCEEDED: {
        const newPropertyList = draft?.propertyList?.data?.map((record) =>
          record?.id === action?.data?.id ? action?.data : record
        );
        const newFavoritePropertyList = draft?.favoritePropertyList?.data
          ?.map((record) =>
            record?.id === action?.data?.id ? action?.data : record
          )
          .filter((record) => record.isFavorite);

        draft.propertyList.data = newPropertyList;
        draft.favoritePropertyList.data = newFavoritePropertyList;
        draft.updateProperty.loading = false;
        draft.updateProperty.error = "";
        break;
      }
      case types.UPDATE_PROPERTY.FAILED: {
        draft.updateProperty.loading = false;
        draft.updateProperty.error = action.error;
        break;
      }

      default:
        break;
    }
  });

export default propertiesReducer;
