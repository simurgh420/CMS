import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { orders} from "@/data/orders"

export default function RecentOrdersTable() {
  return (
    <Card>
          <CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader>
          <CardContent>
              <Table>
                  <TableHeader>
                      <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                      {orders.map((order) => (
                          <TableRow key={order.email}>
                              <TableCell>
                                  <div className="flex items-center gap-3"> 
                                      <Avatar className="w-9 h-9">
                                          <AvatarImage src={ order.avatar} />
                                          <AvatarFallback>{ order.avatar.substring(0,2)}</AvatarFallback>
                                        </Avatar>
                                  </div>
                                  <p className="font-medium">{order.name}</p>
                                  <p className="text-sm text-slate-500">{ order.email}</p>
                              </TableCell>
                              <TableCell className="font-semibold">{ order.amount}</TableCell>
                          </TableRow>
                      ))
                          
                      }
                  </TableBody>
              </Table>
              </CardContent>
          </Card>
  )
}
