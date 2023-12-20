import { authKey } from "@/constants/storageKey";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types/common";
import { getFromLocalStorage } from "@/utils/local-storage";
import axios, { AxiosResponse } from "axios";

const instance = axios.create();
instance.defaults.headers.patch["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 6000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //!When we send a request, it will automatically send the token from here through the header
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    //
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor

instance.interceptors.response.use(
    //@ts-ignore
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      success: response?.data?.success,
      meta: response?.data?.meta,
    };

    return responseObject;
  },
  function (error) {
    if (error?.response?.status === 403) {
    } else {
      const responseObject: any = {
        statusCode: error?.response?.status || 500,
        message: error?.response?.data?.message || "Something went wrong",
        errorMessages: error?.response?.data?.errorMessage,
      };
      return error.response;
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // return Promise.reject(responseObject);
  }
);

export { instance };
