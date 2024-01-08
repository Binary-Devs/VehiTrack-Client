import { tagTypes } from '@/redux/teg-types';
import { IMeta } from '@/types';
import { baseApi } from '../baseApi';

const EQUIPMENT_URL = '/equipment';

export const equipmentApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // create
    createEquipment: build.mutation({
      query: (data: any) => ({
        url: `${EQUIPMENT_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.equipment],
    }),

    // get all
    getAllEquipment: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${EQUIPMENT_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          equipments: response,
          meta,
        };
      },
      providesTags: [tagTypes.equipment],
    }),

    // get single
    getSingleEquipment: build.query({
      query: (id: string) => ({
        url: `${EQUIPMENT_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.equipment],
    }),

    // update
    updateEquipment: build.mutation({
      query: (data: any) => ({
        url: `${EQUIPMENT_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.equipment],
    }),
  }),
});

export const {
  useCreateEquipmentMutation,
  useGetAllEquipmentQuery,
  useGetSingleEquipmentQuery,
  useUpdateEquipmentMutation,
} = equipmentApi;
