import AnalyticsChart from "@/components/AnalyticsChart"
import LatestTransactions from "@/components/LatestTransactions"
import NewMembers from "@/components/NewMembers"
import StatCard from "@/components/StatCard"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* بخش کارت‌های آمار */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
       title="Revenue"
       value="$2,415"
       change="-11.4%"
       changeType="decrease"
          description="Compared to last month"
        />
        <StatCard
          title="Sales"
          value="$4,415"
          change="-1.4%"
          changeType="decrease"
          description="Compared to last month"
        />

          <StatCard
          title="Cost"
          value="$2,225"
          change="+2.4%"
          changeType="increase"
          description="Compared to last month"
        />
      </div>


      <div className="mt-6">
      <AnalyticsChart />
      </div>
      <div className=" grid-cols-1 grid md:grid-cols-2 gap-4 ">
        <NewMembers/>
  
      <div className="space-y-4">
        <LatestTransactions/>
      </div>
      </div>
    </div>
  )
}
