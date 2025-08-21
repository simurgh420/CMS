import StatCard from "@/components/StatCard";
import DevicePieChart from "@/components/DevicePieChart"; 
import TrafficBarChart from "@/components/TrafficBarChart";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Total Visits"  value="10,482"   change="+12.5%" changeType="increase" description="since last month"/>
      <StatCard title="New Users" value="1,204" change="+5.2%" changeType="increase" description="since last month" />
      <StatCard title="Bounce Rate" value="42.8%" change="-2.1%" changeType="decrease" description="since last month" />
      <StatCard title="Avg. Session" value="2m 15s" change="+0.5%" changeType="increase" description="since last month" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DevicePieChart />
        <TrafficBarChart/>
      </div>

    </div>
  )
}
