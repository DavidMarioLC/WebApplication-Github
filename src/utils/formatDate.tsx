import dayjs from 'dayjs';
import 'dayjs/locale/en';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.locale('en');
dayjs.extend(relativeTime);

export const formatDate = (value: string): string => {
  const dateObject = new Date(value);
  const date = dayjs(dateObject, 'MM-DD-YYYY');
  const dateNow = date.fromNow();
  return dateNow;
};
