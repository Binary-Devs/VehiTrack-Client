import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';

const USER_URL = '/user';

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //  create super admin
    createSuperAdmin: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create-super-admin`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // create admin
    createAdmin: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create-admin`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // create driver
    createDriver: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create-driver`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // create helper
    createHelper: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/create-helper`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateSuperAdminMutation,
  useCreateAdminMutation,
  useCreateDriverMutation,
  useCreateHelperMutation,
} = userApi;
