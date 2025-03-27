import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart({ Amparr, temp }) {
  if (Amparr.length !== temp.length) {
    return <p>Data mismatch: Amparr and temp must have the same length.</p>;
  }

  return (
    <LineChart
      xAxis={[{ data: Amparr, scaleType: 'linear' }]}
      series={[
        {
          data: temp,
        },
      ]}
      width={500}
      height={300}
    />
  );
}

