import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const DRIVER_URL = '/driver';

export const driverApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all
    getAllDriver: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${DRIVER_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          drivers: response,
          meta,
        };
      },
      providesTags: [tagTypes.driver, tagTypes.user],
    }),

    // get single
    getSingleDriver: build.query({
      query: (id: string) => ({
        url: `${DRIVER_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.driver, tagTypes.user],
    }),

    // update
    updateDriver: build.mutation({
      query: (data) => ({
        url: `${DRIVER_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.driver, tagTypes.user],
    }),

    // inactive
    inactiveDriver: build.mutation({
      query: (id: string) => ({
        url: `${DRIVER_URL}/${id}/inactive`,
        method: 'PATCH',
      }),
      invalidatesTags: [tagTypes.driver, tagTypes.user],
    }),
  }),
});

export const {
  useGetAllDriverQuery,
  useGetSingleDriverQuery,
  useUpdateDriverMutation,
  useInactiveDriverMutation,
} = driverApi;
