import * as React from 'react';
import { formatRelative } from 'date-fns';
import { ArgumentsType } from '../types';

export interface IFormatRelativeProps {
  date: string | Date | number;
  base?: Date;
  options?: ArgumentsType<typeof formatRelative>[2];
}

export const FormatRelative: React.FunctionComponent<IFormatRelativeProps> = ({
  date,
  base = new Date(),
  options,
}) => {
  date = typeof date === 'string' ? new Date(date) : date;
  return <>{formatRelative(date, base, options)}</>;
};
