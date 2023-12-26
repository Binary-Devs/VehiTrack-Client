import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const EQUIPMENT_IN_URL = '/equipment-in';

export const equipmentInApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createEquipmentIn: build.mutation({
      query: (data) => ({
        url: `${EQUIPMENT_IN_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.equipmentIn],
    }),

    // get all
    getAllEquipmentIn: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${EQUIPMENT_IN_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          equipmentIns: response,
          meta,
        };
      },
      providesTags: [tagTypes.equipmentIn],
    }),

    // get single
    getSingleEquipmentIn: build.query({
      query: (id: string) => ({
        url: `${EQUIPMENT_IN_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.equipmentIn],
    }),

    // update
    updateEquipmentIn: build.mutation({
      query: (data) => ({
        url: `${EQUIPMENT_IN_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.equipmentIn],
    }),

    // delete
    deleteEquipmentIn: build.mutation({
      query: (id: string) => ({
        url: `${EQUIPMENT_IN_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagTypes.equipmentIn],
    }),
  }),
});

export const {
  useCreateEquipmentInMutation,
  useGetAllEquipmentInQuery,
  useGetSingleEquipmentInQuery,
  useUpdateEquipmentInMutation,
  useDeleteEquipmentInMutation,
} = equipmentInApi;
