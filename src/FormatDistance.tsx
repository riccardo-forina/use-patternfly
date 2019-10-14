import * as React from 'react';
import { formatDistance } from 'date-fns';
import { ArgumentsType } from '../types';

export interface IFormatDistanceProps {
  date: string | Date | number;
  base?: Date;
  options?: ArgumentsType<typeof formatDistance>[2];
}
export const FormatDistance: React.FunctionComponent<IFormatDistanceProps> = ({
  date,
  base = new Date(),
  options,
}) => {
  date = typeof date === 'string' ? new Date(date) : date;
  return <>{formatDistance(date, base, options)}</>;
};
