import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const TRIP_URL = '/trip';

export const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createTrip: build.mutation({
      query: (data) => ({
        url: `${TRIP_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.trip],
    }),

    // get all
    getAllTrip: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${TRIP_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          trips: response,
          meta,
        };
      },
      providesTags: [tagTypes.trip],
    }),

    // get single
    getSingleTrip: build.query({
      query: (id: string) => ({
        url: `${TRIP_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.trip],
    }),

    // update
    updateTrip: build.mutation({
      query: (data) => ({
        url: `${TRIP_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.trip],
    }),

    // delete
    deleteTrip: build.mutation({
      query: (id: string) => ({
        url: `${TRIP_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.trip],
    }),

    // trip expense
    updateTripExpense: build.mutation({
      query: (data) => ({
        url: `${TRIP_URL}/${data?.id}/trip-expense`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.trip],
    }),
  }),
});

export const {
  useCreateTripMutation,
  useGetAllTripQuery,
  useGetSingleTripQuery,
  useUpdateTripMutation,
  useDeleteTripMutation,
  useUpdateTripExpenseMutation,
} = tripApi;
