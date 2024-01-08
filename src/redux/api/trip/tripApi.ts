import { tagTypes } from "@/redux/teg-types";
import { IMeta } from "@/types";
import { baseApi } from "../baseApi";
import { EXPENSE_TYPE_URL } from "../expenseHead/expenseHeadApi";

const TRIP_URL = "/trip";

export const tripApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // create
    createTrip: build.mutation({
      query: (data: any) => ({
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
      query: (data: any) => ({
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
      query: (data: any) => ({
        url: `${TRIP_URL}/${data?.id}/trip-expense`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.trip],
    }),

    // get all trip expense head
    getAllTripExpenseHead: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${EXPENSE_TYPE_URL}?isTripExpense=true`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          tripExpenseHeads: response,
          meta,
        };
      },
      providesTags: [tagTypes.expenseHead],
    }),

    // create trip expense head
    createTripExpenseHead: build.mutation({
      query: (data: any) => ({
        url: `${EXPENSE_TYPE_URL}/create`,
        method: 'POST',
        data: { ...data, isTripExpense: true },
      }),
      invalidatesTags: [tagTypes.expenseHead],
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
  useGetAllTripExpenseHeadQuery,
  useCreateTripExpenseHeadMutation,
} = tripApi;
