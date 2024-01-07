// summation of array
export const totalSum = (array: any[], key: string): number => {
  const initialValue = 0;
  return array.reduce(
    (total, item) => total + parseFloat(item[key] ? item[key] : 0),
    initialValue
  );
};
