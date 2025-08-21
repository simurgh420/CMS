import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { useState } from 'react'
import { Link } from "react-router";
import {users as usersData } from "@/data/users"
import type { Users } from "@/types/type";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,

} from "@/components/ui/alert-dialog";


// تعریف یک mapping برای رنگ و متن Badge ها
const statusStyles: { [key: string]: { variant: 'default' | 'secondary' | 'destructive', text: string } } = {
  'active': { variant: 'default', text: 'Active' },
  'passive': { variant: 'secondary', text: 'Passive' },
  'pending': { variant: 'destructive', text: 'Pending' }
};
export default function UsersPage() {
  const [users, setUsers] = useState<Users[]>(usersData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<string | null>(null);
  const ITEMS_PER_PAGE = 4; // تعداد آیتم‌ها در هر صفحه
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const handleDeleteUser = () => {
    if (userToDelete) {
      setUsers(currentUsers => currentUsers.filter(user => user.id !== userToDelete))
      setUserToDelete(null)
      setIsDeleteDialogOpen(false)
    }

  };
  const openDeleteDialog = (userId:string) => { 
    setUserToDelete(userId)
    setIsDeleteDialogOpen(true)
  }
  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <div className="w-full max-w-sm">
          <Input
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <Link to="/users/new">
          <Button>Add New User</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
        <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Transaction</TableHead>
            <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
      
        <TableBody>
          {currentUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback>{ user.name.substring(0,2)}</AvatarFallback>
                  </Avatar>
                  <span>{ user.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-slate-500">{user.email}</TableCell>
              <TableCell>
                <Badge variant={statusStyles[user.status].variant}> 
                {statusStyles[user.status].text}
                </Badge>
              </TableCell>
              <TableCell className="text-slate-500">{user.transaction} </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                
                    <DropdownMenuItem asChild >
                    <Link to={`/users/${user.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                        </Link>
                    </DropdownMenuItem>
                
                    <DropdownMenuItem className="text-red-500 focus:text-red-800"
                      onSelect={()=>openDeleteDialog(user.id)}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                    </DropdownMenuItem >
                  </DropdownMenuContent>
              </DropdownMenu>
             </TableCell>
              </TableRow>
          ))}
        </TableBody>
  
      </Table>
      <div className="px-6 py-6 border-t flex justify-end items-center gap-4">
        <span  className="text-sm text-slate-500">
          Page {currentPage} of {totalPages}
        </span >
        <div className="flex gap-2">
          <Button
            variant='outline'
            size='sm'
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
                Previous
          </Button>
          <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}>
              Next  
          </Button>
        </div>

      </div>
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
          This action cannot be undone. This will permanently delete the user account
          and remove their data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteUser}> Continue</AlertDialogAction>
          </AlertDialogFooter>
          </AlertDialogContent>
            </AlertDialog>
    </div>
  )
}
