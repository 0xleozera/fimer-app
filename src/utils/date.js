export const splitDate = date => {
  const [day, month, years] = date.split('/');

  return { day, month, years };
};
