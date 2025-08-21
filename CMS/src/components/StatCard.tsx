
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";    
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps { 
    title: string;
    value: string;
    change: string;
    changeType: 'increase' | 'decrease';
    description: string;
}

const StatCard = ({ title, value, change, changeType, description }: StatCardProps) => {
    const isIncrease = changeType === "increase";
    const changeColor = isIncrease ? 'text-emerald-500' : 'text-red-500'
    const ChangeIcon =  isIncrease ? ArrowUpRight :  ArrowDownRight
    return (  
        <Card>
            <CardHeader>
                <CardTitle className="text-base font-medium text-slate-500">{ title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold"> {value} </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                    <span className={`flex items-center font-semibold ${changeColor}`}>
                    <ChangeIcon size={16} />
                        {change}
                    </span>
                    <span>{description }</span>
                   </div>
            </CardContent>
      </Card>
  )
}
export default StatCard;
