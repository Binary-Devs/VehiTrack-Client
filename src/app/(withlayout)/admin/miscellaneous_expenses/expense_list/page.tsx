import Expenses from '@/components/MiscellaneousExpense/Expenses';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Expenses',
};

const ExpenseListPage = () => {
  return <Expenses />;
};

export default ExpenseListPage;
