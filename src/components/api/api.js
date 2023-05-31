import ky from "ky";

const strapiApi = ky.create({ prefixUrl: "https://strapi.belgi.kg/api/" });

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

export function addProductionProduct(data) {
  return strapiApi.post("productions", { json: { data: data } });
}

export function getBulkProduct(id) {
  return strapiApi.get(`users/${id}?populate=*`).json();
}
export function getProductionProduct(id) {
  return strapiApi.get(`users/${id}?populate=*`).json();
}
export function deleteBulkProduct(id) {
  return strapiApi.delete(`bulk-buyings/${id}`);
}

export const getAllBulkProduct = () => {
  return strapiApi.get("bulk-buyings").json();
};
export const getAllProductionList = () => {
  return strapiApi.get("productions").json();
};

export const getOnlyBulkProduct = (id) => {
  return strapiApi.get(`bulk-buyings/${id}?populate=*`).json();
};
export const getOnlyProductionProduct = (id) => {
  return strapiApi.get(`productions/${id}?populate=*`).json();
};

export const AddBulkProductToProviders = (id, data) => {
  return strapiApi.put(`bulk-buyings/${id}`, { json: { data: data } });
};
export const AddProductionProductToProviders = (id, data) => {
  return strapiApi.put(`productions/${id}`, { json: { data: data } });
};

export const changePassword = async (token, passwordData) => {
  return await strapiApi
    .post("auth/change-password", {
      json: {
        currentPassword: passwordData.password,
        password: passwordData.newPassword,
        passwordConfirmation: passwordData.passwordConfirmation,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json();
};

export const forgotPassword = (data) => {
  return strapiApi.post("auth/forgot-password", {
    data,
  });
};
