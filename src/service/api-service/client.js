// import { setup } from "axios-cache-adapter";
import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const BASE_URL = "https://cb2e-2409-4055-2e13-63c4-bc7a-ec0d-1123-9fd.ngrok-free.app/serious-games-backend/";
if (!BASE_URL) throw new Error("NO BACKEND ENDPOINT SET.");

// const api = setup({
//   baseURL: BASE_URL,
//   cache: {
//     maxAge: 24 * 60 * 60 * 5,
//     exclude: {
//       query: false,
//     },
//     // invalidate: async (config, request) => {
//     //   if (request.clearCache) {
//     //     let caches = Object.keys(config.store.store);
//     //     let path = request.url.split(BASE_URL)[1].slice(0, -1);
//     //     for (let i = 0; i < caches.length; i++) {
//     //       if (caches[i].indexOf(path) !== -1) {
//     //         await config.store.removeItem(caches[i]);
//     //       }
//     //     }
//     //   }
//     // },
//     clearOnStale: true,
//   },
// });

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// adds auth headers to protected routes
// axiosInstance.interceptors.request.use((config) => {
//   const tokens = getItem("AUTH");
//   const { access_token } = tokens || { access_token: null };
//   const shouldAddAuthHeaders = !config.url.includes("/auth/") && access_token; // not adding token for some requests. e.g: /auth/user/login
//   if (shouldAddAuthHeaders) config.headers.Authorization = access_token;
//   return config;
// });

// if request fails for token being invalid, generates a new token and sends request again
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       const { refresh_token } = getItem("AUTH") || { refresh_token: null };

//       if (!refresh_token) throw new Error("Session Expired. Please log in again.");

//       let res;
//       try {
//         res = await axios.post(`${BASE_URL}auth/user/refresh/token`, {
//           token: refresh_token,
//         });
//       } catch (error) {
//         //if refresh token is not valid logout
//         Logout();
//       }

//       const tokens = res?.data?.data || { access_token: null };

//       setItem("AUTH", tokens);
//       error.config.headers.Authorization = tokens.access_token;
//       return axios(error.config);
//     } else {
//       return handleError(error);
//     }
//   }
// );

/**
 * helper function to make api calls to backend
 * @param {{
 * method: 'get' | 'post' | 'patch' | 'put' | 'delete',
 * API: string,
 * data: {[string]: string}
 * clearCacheEntry: boolean
 * cancelToken: any
 * }} options
 * @returns data from backend
 */
const Request = async ({
  method = "get",
  API,
  data = undefined,
  clearCacheEntry = false,
  cancelToken = undefined,
  header = {},
}) => {
  console.log("data==>", data,method)
  const axiosOptions = {
    headers: { ...header },
    clearCache: clearCacheEntry,
    cancelToken,
    data,
  };
  try {
    if (method === "delete" || method === "get") {
      const response = await axiosInstance[method](`${BASE_URL}${API}`, axiosOptions);
      if (response.status) {
        return { data: response?.data, status: true };
      } else {
        return response;
      }
    } else {
      const response = await axiosInstance[method](`${BASE_URL}${API}`, data, axiosOptions);
      if (response.status) {
        return { data: response?.data, status: true };
      } else {
        return response;
      }
    }
  } catch (error) {
    console.log("API: ", API);
    console.log("ERROR:", error);
    return error;
  }
};

export default Request;
