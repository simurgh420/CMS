import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
    { name: 'Google', value: 2400 },
    { name: 'Direct', value: 1398 },
    { name: 'Social', value: 9800 },
    { name: 'Referral', value: 3908 },
    { name: 'Other', value: 4800 },
  ];
export default function TrafficBarChart() {
  return (
    <Card>
    <CardHeader>
        <CardTitle>Traffic by Source</CardTitle>
          </CardHeader>
          <CardContent className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.5} />
                        <XAxis type="number" stroke="#888888" fontSize={12} />
                        <YAxis dataKey="name" type="category" stroke="#888888" fontSize={12} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid #e2e8f0',
                            borderRadius: '0.5rem',
                          }}
                        />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
          </CardContent>
          </Card>
  )
}
