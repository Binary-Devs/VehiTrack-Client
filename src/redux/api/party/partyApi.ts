import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const PARTY_URL = '/party';

export const partyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createParty: build.mutation({
      query: (data) => ({
        url: `${PARTY_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.party],
    }),

    // get all
    getAllParties: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${PARTY_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          parties: response,
          meta,
        };
      },
      providesTags: [tagTypes.party],
    }),

    // get single
    getSingleParty: build.query({
      query: (id: string) => ({
        url: `${PARTY_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.party],
    }),

    // update
    updateParty: build.mutation({
      query: (data) => ({
        url: `${PARTY_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.party],
    }),

    // inactive
    inactiveParty: build.mutation({
      query: (id: string) => ({
        url: `${PARTY_URL}/${id}/inactive`,
        method: 'PATCH',
      }),
      invalidatesTags: [tagTypes.party],
    }),
  }),
});

export const {
  useCreatePartyMutation,
  useGetAllPartiesQuery,
  useGetSinglePartyQuery,
  useUpdatePartyMutation,
  useInactivePartyMutation,
} = partyApi;
