import { tagTypes } from "@/redux/teg-types";
import { IMeta } from "@/types";
import { baseApi } from "../baseApi";

const USER_URL = "/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    //  create super admin
    createSuperAdmin: build.mutation({
      query: (data: any) => ({
        url: `${USER_URL}/create-super-admin`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // create admin
    createAdmin: build.mutation({
      query: (data: any) => ({
        url: `${USER_URL}/create-admin`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // create driver
    createDriver: build.mutation({
      query: (data: any) => ({
        url: `${USER_URL}/create-driver`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user, tagTypes.driver],
    }),

    // create helper
    createHelper: build.mutation({
      query: (data: any) => ({
        url: `${USER_URL}/create-helper`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // get all
    getAllUser: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${USER_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateSuperAdminMutation,
  useCreateAdminMutation,
  useCreateDriverMutation,
  useCreateHelperMutation,
  useGetAllUserQuery,
} = userApi;
