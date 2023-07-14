import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ChartContainer from './ChartStyles';

const Chart = ({ data }) => {
  return (
    <ChartContainer>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="symbol" />
        <YAxis
          tickFormatter={(value) => `$${value.toFixed(2)}`}
          dataKey="current_price"
        />
        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
        <Legend />
        <Bar dataKey="current_price" fill="#8884d8" />
      </BarChart>
    </ChartContainer>
  );
};

export default Chart;
