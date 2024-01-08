import { tagTypes } from '@/redux/teg-types';
import { IMeta } from '@/types';
import { baseApi } from '../baseApi';

const PAPER_WORK_URL = '/paper-work';

export const paperWorkApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // create
    createPaperWork: build.mutation({
      query: (data: any) => ({
        url: `${PAPER_WORK_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.paperWork],
    }),

    // get all
    getAllPaperWorks: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${PAPER_WORK_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          paperWorks: response,
          meta,
        };
      },
      providesTags: [tagTypes.paperWork],
    }),

    // get single
    getSinglePaperWork: build.query({
      query: (id: string) => ({
        url: `${PAPER_WORK_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.paperWork],
    }),

    // update
    updatePaperWork: build.mutation({
      query: (data: any) => ({
        url: `${PAPER_WORK_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.paperWork],
    }),

    // delete
    deletePaperWork: build.mutation({
      query: (id: string) => ({
        url: `${PAPER_WORK_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.paperWork],
    }),
  }),
});

export const {
  useCreatePaperWorkMutation,
  useGetAllPaperWorksQuery,
  useGetSinglePaperWorkQuery,
  useUpdatePaperWorkMutation,
  useDeletePaperWorkMutation,
} = paperWorkApi;
