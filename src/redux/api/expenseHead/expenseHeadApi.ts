import { tagTypes } from "@/redux/teg-types";
import { IMeta } from "@/types";
import { baseApi } from "../baseApi";

export const EXPENSE_TYPE_URL = "/expense-head";

export const expenseHeadApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createExpenseHead: build.mutation({
      query: (data) => ({
        url: `${EXPENSE_TYPE_URL}/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.expenseHead],
    }),

    // get all
    getAllExpenseHead: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${EXPENSE_TYPE_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          expenseHeads: response,
          meta,
        };
      },
      providesTags: [tagTypes.expenseHead],
    }),

    // get single
    getSingleExpenseHead: build.query({
      query: (id: string) => ({
        url: `${EXPENSE_TYPE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.expenseHead],
    }),

    // update
    updateExpenseHead: build.mutation({
      query: (data) => ({
        url: `${EXPENSE_TYPE_URL}/${data?.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.expenseHead],
    }),
  }),
});

export const {
  useCreateExpenseHeadMutation,
  useGetAllExpenseHeadQuery,
  useGetSingleExpenseHeadQuery,
  useUpdateExpenseHeadMutation,
} = expenseHeadApi;
