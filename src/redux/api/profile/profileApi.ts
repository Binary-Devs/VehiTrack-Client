import { tagTypes } from '@/redux/teg-types';
import { baseApi } from '../baseApi';

const PROFILE_URL = '/profile';

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    getProfile: build.query({
      query: () => ({
        url: `${PROFILE_URL}`,
        method: 'GET',
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
