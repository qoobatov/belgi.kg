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
