import RecentOrdersTable from '@/components/RecentOrdersTable';
import RevenueChart from '@/components/RevenueChart';
import StatCard from '@/components/StatCard';

export default function SalesPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$45,231.89"
          change="+20.1%"
          changeType="increase"
          description="from last month"
        />
        <StatCard
          title="Total Sales"
          value="+12,234"
          change="+19%"
          changeType="increase"
          description="from last month"
        />
        <StatCard
          title="Avg. Order Value"
          value="$31.50"
          change="-1.2%"
          changeType="decrease"
          description="from last month"
        />
        <StatCard
          title="Conversion Rate"
          value="2.5%"
          change="+0.5%"
          changeType="increase"
          description="from last month"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <RevenueChart />
        </div>
        <div className="lg:col-span-2">
          <RecentOrdersTable />
        </div>
      </div>
    </div>
  );
}
