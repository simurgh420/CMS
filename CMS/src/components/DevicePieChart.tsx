import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function DevicePieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic by Device</CardTitle>
      </CardHeader>
      <CardContent className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              // توی بخش لیبل مشخص میکنیم که تقسیم بندی های لیببل چطوری انجام بده
              label={({ percent = 0, payload }) =>
                `${payload.name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {/* مشخص کردن رنگ برای هر بخش اسلایس  */}
              {data.map((_entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
