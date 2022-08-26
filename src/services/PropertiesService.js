import HTTPMethod from "./index";

class PropertiesService {
  // [GET]
  getPropertyList = ({ queryFilter }) =>
    HTTPMethod.get(`/properties?${queryFilter}`);
  getFavoritePropertyList = () => HTTPMethod.get("/properties/favorite");

  // [PUT]
  updateProperty = ({ id, formData }) =>
    HTTPMethod.put(`/properties/${id}`, formData);
}

export default new PropertiesService();
