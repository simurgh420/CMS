import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "@/components/ui/badge";
import { transactions} from '@/data/transactions'
const statusColors: { [key: string]: 'default' | 'secondary' | 'destructive' } = {
    'Approved': 'default',
    'Pending': 'secondary',
    'Declined': 'destructive'
};
export default function LatestTransactions() {
  return (
      <Card>
          <CardHeader>
              <CardTitle className="text-center">Latest Transactions</CardTitle>
          </CardHeader>
          <CardContent>
              <Table>
              <TableHeader>
                      <TableRow>
                      <TableHead>Customer</TableHead>
                        <TableHead>Date</TableHead>
                         <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                         </TableRow>
               </TableHeader>
                  <TableBody>
                      {transactions.map((transaction) => (
                          <TableRow key={transaction.customer}>
                              <TableCell>
                                  <div className="flex items-center gap-3">
                                      <Avatar className="w-8 h-8">
                                          <AvatarImage src={transaction.avatar} />
                                          <AvatarFallback>{ transaction.customer.substring(0,2)}</AvatarFallback>
                                      </Avatar>
                                      <span className="font-medium">{ transaction.customer}</span>
                                  </div>
                              </TableCell>
                              <TableCell className="text-slate-500">{transaction.date}</TableCell>
                              <TableCell className="bg-slate-500">{transaction.status}</TableCell>
                              <TableCell>
                              <Badge variant={statusColors[transaction.status]}>
                                 {transaction.status}
                                  </Badge>
                              </TableCell>
                          </TableRow>
                      )) }
                  </TableBody>

              </Table>
          </CardContent>
    </Card>
  )
}
