import ExpenseHeads from '@/components/MiscellaneousExpense/ExpenseHeads';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VehiTrack | Expense Heads',
};

const ExpenseHeadsPage = () => {
  return <ExpenseHeads />;
};

export default ExpenseHeadsPage;
