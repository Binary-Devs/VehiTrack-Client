import { tagTypes } from '@/redux/teg-types';
import { IMeta } from '@/types';
import { baseApi } from '../baseApi';

const ACCIDENT_HISTORY_URL = '/accident-history';

export const accidentHistoryApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // create
    createAccidentHistory: build.mutation({
      query: (data: any) => ({
        url: `${ACCIDENT_HISTORY_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.accidentHistory],
    }),

    // get all
    getAllAccidentHistories: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${ACCIDENT_HISTORY_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          accidentHistories: response,
          meta,
        };
      },
      providesTags: [tagTypes.accidentHistory],
    }),

    // get single
    getSingleAccidentHistory: build.query({
      query: (id: string) => ({
        url: `${ACCIDENT_HISTORY_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.accidentHistory],
    }),

    // update
    updateAccidentHistory: build.mutation({
      query: (data: any) => ({
        url: `${ACCIDENT_HISTORY_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.accidentHistory],
    }),

    // delete
    deleteAccidentHistory: build.mutation({
      query: (id: string) => ({
        url: `${ACCIDENT_HISTORY_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.accidentHistory],
    }),
  }),
});

export const {
  useCreateAccidentHistoryMutation,
  useGetAllAccidentHistoriesQuery,
  useGetSingleAccidentHistoryQuery,
  useUpdateAccidentHistoryMutation,
  useDeleteAccidentHistoryMutation,
} = accidentHistoryApi;
