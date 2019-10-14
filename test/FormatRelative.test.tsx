import * as React from 'react';
import { render } from '@test/setup';
import { FormatRelative } from '@src';
import it from 'date-fns/locale/it';
import { subDays } from 'date-fns';

const dateISO = '2019-10-14T11:55:39.058Z';
const todayMinusOneDay = subDays(new Date(dateISO), 1);

describe('FormatRelative tests', () => {
  test('should render the relative time against today', async () => {
    const { getByText } = render(<FormatRelative date={todayMinusOneDay} />);
    getByText('yesterday at 1:55 PM');
  });

  test('should render the relative time using the passed base date', async () => {
    const { getByText } = render(
      <FormatRelative date={todayMinusOneDay} base={todayMinusOneDay} />
    );
    getByText('today at 1:55 PM');
  });

  test('should render the relative time against today respecting the date-fns config object', async () => {
    const { getByText } = render(
      <FormatRelative date={todayMinusOneDay} options={{ locale: it }} />
    );
    getByText('ieri alle 13:55');
  });
});
