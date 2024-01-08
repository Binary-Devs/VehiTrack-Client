import { tagTypes } from '@/redux/teg-types';
import { IMeta } from '@/types';
import { baseApi } from '../baseApi';

const REPORT_URL = '/report';

export const reportApi = baseApi.injectEndpoints({
  endpoints: (build: any) => ({
    // balance sheet
    balanceSheet: build.query({
      query: () => ({
        url: `${REPORT_URL}/balance-sheet`,
        method: 'GET',
      }),
      transformResponse: (response: any[]) => {
        return {
          balanceSheet: response,
        };
      },
      providesTags: [
        tagTypes.vehicle,
        tagTypes.accountHead,
        tagTypes.accountType,
        tagTypes.accidentHistory,
        tagTypes.equipmentIn,
        tagTypes.expense,
        tagTypes.expenseHead,
        tagTypes.fuel,
        tagTypes.maintenance,
        tagTypes.paperWork,
        tagTypes.vehicle,
      ],
    }),

    // fuel status
    fuelStatus: build.query({
      query: () => ({
        url: `${REPORT_URL}/fuel-status`,
        method: 'GET',
      }),
      transformResponse: (response: any[]) => {
        return {
          fuelStatus: response,
        };
      },
      providesTags: [
        tagTypes.vehicle,
        tagTypes.accountHead,
        tagTypes.accountType,
        tagTypes.accidentHistory,
        tagTypes.equipmentIn,
        tagTypes.expense,
        tagTypes.expenseHead,
        tagTypes.fuel,
        tagTypes.maintenance,
        tagTypes.paperWork,
        tagTypes.vehicle,
      ],
    }),

    // stock status
    stockStatus: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${REPORT_URL}/stock-status`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          stockStatus: response,
          meta,
        };
      },
      providesTags: [
        tagTypes.vehicle,
        tagTypes.accountHead,
        tagTypes.accountType,
        tagTypes.accidentHistory,
        tagTypes.equipmentIn,
        tagTypes.expense,
        tagTypes.expenseHead,
        tagTypes.fuel,
        tagTypes.maintenance,
        tagTypes.paperWork,
        tagTypes.vehicle,
      ],
    }),

    // summary report
    summaryReport: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${REPORT_URL}/summary-report`,
        method: 'GET',
        params: arg,
      }),
      transformResponse: (response: any[], meta: IMeta) => {
        return {
          summaries: response,
          meta,
        };
      },
      providesTags: [
        tagTypes.vehicle,
        tagTypes.accountHead,
        tagTypes.accountType,
        tagTypes.accidentHistory,
        tagTypes.equipmentIn,
        tagTypes.expense,
        tagTypes.expenseHead,
        tagTypes.fuel,
        tagTypes.maintenance,
        tagTypes.paperWork,
        tagTypes.vehicle,
      ],
    }),

    // trip summary
    tripSummary: build.query({
      query: () => ({
        url: `${REPORT_URL}/trip-summary`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return {
          summaries: response,
        };
      },
      providesTags: [
        tagTypes.vehicle,
        tagTypes.accountHead,
        tagTypes.accountType,
        tagTypes.accidentHistory,
        tagTypes.equipmentIn,
        tagTypes.expense,
        tagTypes.expenseHead,
        tagTypes.fuel,
        tagTypes.maintenance,
        tagTypes.paperWork,
        tagTypes.vehicle,
      ],
    }),

    // get trip summary by grouping year, month
    tripSummaryGroupByMonthYear: build.query({
      query: () => ({
        url: `${REPORT_URL}/trip-summary-year-month`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return {
          summaries: response,
        };
      },
      providesTags: [
        tagTypes.vehicle,
        tagTypes.accountHead,
        tagTypes.accountType,
        tagTypes.accidentHistory,
        tagTypes.equipmentIn,
        tagTypes.expense,
        tagTypes.expenseHead,
        tagTypes.fuel,
        tagTypes.maintenance,
        tagTypes.paperWork,
        tagTypes.vehicle,
      ],
    }),

    // get fuel summary by grouping year, month
    fuelSummaryGroupByMonthYear: build.query({
      query: () => ({
        url: `${REPORT_URL}/fuel-summary-year-month`,
        method: 'GET',
      }),
      transformResponse: (response: any) => {
        return {
          summaries: response,
        };
      },
      providesTags: [
        tagTypes.vehicle,
        tagTypes.accountHead,
        tagTypes.accountType,
        tagTypes.accidentHistory,
        tagTypes.equipmentIn,
        tagTypes.expense,
        tagTypes.expenseHead,
        tagTypes.fuel,
        tagTypes.maintenance,
        tagTypes.paperWork,
        tagTypes.vehicle,
      ],
    }),
  }),
});

export const {
  useBalanceSheetQuery,
  useFuelStatusQuery,
  useStockStatusQuery,
  useSummaryReportQuery,
  useTripSummaryQuery,
  useTripSummaryGroupByMonthYearQuery,
  useFuelSummaryGroupByMonthYearQuery,
} = reportApi;
