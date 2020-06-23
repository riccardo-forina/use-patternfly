import * as React from 'react';
import { render } from '@test/setup';
import { FormatDistance } from '@src';
import it from 'date-fns/locale/it';
import { subDays } from 'date-fns';

const dateISO = '2019-10-14T11:55:39.058Z';
const base = new Date(dateISO);
const baseMinusOneDay = subDays(new Date(dateISO), 1);
const baseMinusTenDays = subDays(new Date(dateISO), 10);

describe('FormatDistance tests', () => {
  test('should render the date string in an human readable way', async () => {
    const { getByText } = render(
      <FormatDistance date={baseMinusOneDay} base={base} />
    );
    getByText('1 day');
  });

  test('should render the date string accordingly to the passed format', async () => {
    const { getByText } = render(
      <FormatDistance date={baseMinusTenDays} base={baseMinusOneDay} />
    );
    getByText('9 days');
  });

  test('should render the date string respecting the date-fns config object', async () => {
    const { getByText } = render(
      <FormatDistance
        date={baseMinusOneDay}
        base={base}
        options={{ locale: it }}
      />
    );
    getByText('un giorno');
  });
});
