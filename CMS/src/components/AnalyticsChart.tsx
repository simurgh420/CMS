

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import {  analyticsData } from "@/data/data";
// داده‌های نمونه برای نمودار - در یک پروژه واقعی این داده‌ها از API گرفته می‌شوند

const AnalyticsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Analytics</CardTitle>
      </CardHeader>
      <CardContent className="h-80 w-full">
        {/* این کامپوننت نمودار را واکنش‌گرا می‌کند */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={analyticsData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
            <XAxis dataKey="name" stroke="#888888" fontSize={12} />
            <YAxis stroke="#888888" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              }}
            />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default AnalyticsChart;