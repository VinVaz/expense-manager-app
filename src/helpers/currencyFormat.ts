const getNumberFormat = (input: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(input);
};


export { getNumberFormat };
