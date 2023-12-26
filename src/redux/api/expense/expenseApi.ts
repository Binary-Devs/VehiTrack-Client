import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const EXPENSE_URL = '/expense';

export const expenseApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createExpense: build.mutation({
      query: (data) => ({
        url: `${EXPENSE_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.expense],
    }),

    // get all
    getAllExpense: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${EXPENSE_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          expenses: response,
          meta,
        };
      },
      providesTags: [tagTypes.expense],
    }),

    // get single
    getSingleExpense: build.query({
      query: (id: string) => ({
        url: `${EXPENSE_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.expense],
    }),

    // update
    updateExpense: build.mutation({
      query: (data) => ({
        url: `${EXPENSE_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.expense],
    }),

    // delete
    deleteExpense: build.mutation({
      query: (id: string) => ({
        url: `${EXPENSE_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.expense],
    }),
  }),
});

export const {
  useCreateExpenseMutation,
  useGetAllExpenseQuery,
  useGetSingleExpenseQuery,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expenseApi;
