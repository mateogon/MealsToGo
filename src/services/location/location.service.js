import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results[0]);
  const { lat, lng } = geometry.location;
  return { lat, lng };
};

locationRequest()
  .then(locationTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
