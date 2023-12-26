import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const MODEL_URL = '/model';

export const modelApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createModel: build.mutation({
      query: (data) => ({
        url: `${MODEL_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.model],
    }),

    // get all
    getAllModel: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${MODEL_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          models: response,
          meta,
        };
      },
      providesTags: [tagTypes.model],
    }),

    // get single
    getSingleModel: build.query({
      query: (id: string) => ({
        url: `${MODEL_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.model],
    }),

    // update
    updateModel: build.mutation({
      query: (data) => ({
        url: `${MODEL_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.model],
    }),
  }),
});

export const {
  useCreateModelMutation,
  useGetAllModelQuery,
  useGetSingleModelQuery,
  useUpdateModelMutation,
} = modelApi;
