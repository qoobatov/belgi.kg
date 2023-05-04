import ky from "ky";

const strapiApi = ky.create({ prefixUrl: "http://localhost:1337/api/" });

export function authUsers() {
  return strapiApi.get("users").json();
}

export function addUsers(data) {
  return strapiApi.post("auth/local/register", { json: data });
}

export function loginUser(data) {
  return strapiApi.post("auth/local", { json: data });
}

export function addBulkProduct(data) {
  return strapiApi.post("bulk-buyings", { json: { data: data } });
}
export function getBulkProduct(id) {
  return strapiApi.get(`users/${id}?populate=*`).json();
}
export function deleteBulkProduct(id) {
  return strapiApi.delete(`bulk-buyings/${id}`);
}
