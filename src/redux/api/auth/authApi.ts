import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';

const AUTH_URL = '/auth';

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login
    login: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    // logout
    logout: build.mutation({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: 'POST',
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
