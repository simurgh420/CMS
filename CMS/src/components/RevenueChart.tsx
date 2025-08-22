import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { analyticsData } from '@/data/data';

export default function RevenueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Over Time</CardTitle>
      </CardHeader>
      <CardContent className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={analyticsData}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#10b981"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
