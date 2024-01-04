import { totalSum } from '@/components/Utlis/needyFunction';

export const totalAnnualExpense = (data: any): number => {
  const totalExp = totalSum(data?.expenses || [], 'amount');
  const totalMaintain = totalSum(data?.maintenances || [], 'serviceCharge');
  const totalLegal = totalSum(data?.paperWorks || [], 'totalAmount');
  const totalEquip = totalSum(data?.equipmentUses || [], 'totalPrice');

  return totalExp + totalMaintain + totalLegal + totalEquip;
};

export const totalAnnualProfit = (data: any): number => {
  const totalIncome = totalSum(data?.trips || [], 'amount');

  const totalExp = totalSum(data?.expenses || [], 'amount');
  const totalMaintain = totalSum(data?.maintenances || [], 'serviceCharge');
  const totalLegal = totalSum(data?.paperWorks || [], 'totalAmount');
  const totalEquip = totalSum(data?.equipmentUses || [], 'totalPrice');

  const totalExpense = totalExp + totalMaintain + totalLegal + totalEquip;

  const profit = Math.ceil(totalIncome - totalExpense);

  return profit;
};
