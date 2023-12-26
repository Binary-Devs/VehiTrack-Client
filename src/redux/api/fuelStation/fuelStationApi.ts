import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';
import { IMeta } from '@/types';

const FUEL_STATION_URL = '/fuel-station';

export const fuelStationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create
    createFuelStation: build.mutation({
      query: (data) => ({
        url: `${FUEL_STATION_URL}/create`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: [tagTypes.fuelStation],
    }),

    // get all
    getAllFuelStation: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${FUEL_STATION_URL}`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          fuelStations: response,
          meta,
        };
      },
      providesTags: [tagTypes.fuelStation],
    }),

    // get single
    getSingleFuelStation: build.query({
      query: (id: string) => ({
        url: `${FUEL_STATION_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.fuelStation],
    }),

    // update
    updateFuelStation: build.mutation({
      query: (data) => ({
        url: `${FUEL_STATION_URL}/${data?.id}`,
        method: 'PATCH',
        data: data?.data,
      }),
      invalidatesTags: [tagTypes.fuelStation],
    }),
  }),
});

export const {
  useCreateFuelStationMutation,
  useGetAllFuelStationQuery,
  useGetSingleFuelStationQuery,
  useUpdateFuelStationMutation,
} = fuelStationApi;
