import { format, parseISO } from 'date-fns';

type Options = Parameters<typeof format>[2];

export const formatDate = (
  date: string,
  dateFormat?: string,
  options?: Options
) => {
  const dateOptions = {
    ...options
  };
  return format(parseISO(date), dateFormat ?? 'MMM dd, yyyy', dateOptions);
};
