import { tagTypes } from '@/redux/teg-types';
import { IMeta } from '@/types';
import { baseApi } from '../baseApi';

const UOM_URL = '/uom';

export const uomApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // create
    createUom: build.mutation({
      query: (data: any) => ({
        url: `${UOM_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.uom],
    }),

    // get all
    getAllUom: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${UOM_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          uom: response,
          meta,
        };
      },
      providesTags: [tagTypes.uom],
    }),

    // get single
    getSingleUom: build.query({
      query: (id: string) => ({
        url: `${UOM_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.uom],
    }),

    // update
    updateUom: build.mutation({
      query: (data: any) => ({
        url: `${UOM_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.uom],
    }),
  }),
});

export const {
  useCreateUomMutation,
  useGetAllUomQuery,
  useGetSingleUomQuery,
  useUpdateUomMutation,
} = uomApi;
