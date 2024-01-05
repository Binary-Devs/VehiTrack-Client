import { tagTypes } from "@/redux/teg-types";
import { IMeta } from "@/types";
import { baseApi } from "../baseApi";

const BRAND_URL = "/brand";

export const brandApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createBrand: build.mutation({
      query: (data) => ({
        url: `${BRAND_URL}/create`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.brand],
    }),

    // get all
    getAllBrand: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${BRAND_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          brands: response,
          meta,
        };
      },
      providesTags: [tagTypes.brand],
    }),

    // get single
    getSingleBrand: build.query({
      query: (id: string) => ({
        url: `${BRAND_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.brand],
    }),

    // update
    updateBrand: build.mutation({
      query: (data) => ({
        url: `${BRAND_URL}/${data?.id}`,
        method: "PATCH",
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.brand],
    }),
  }),
});

export const {
  useCreateBrandMutation,
  useGetAllBrandQuery,
  useGetSingleBrandQuery,
  useUpdateBrandMutation,
} = brandApi;
