import { useState } from 'react';
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Edit, Trash2 } from "lucide-react";
import { products as initialProducts } from "@/data/products"
import { Link } from 'react-router';
// استایل برای وضعیت انبار
const stockStatusStyles: { [key: string]: { variant: 'default' | 'secondary' | 'destructive' } } = {
  'In Stock': { variant: 'default' },
  'Low Stock': { variant: 'secondary' },
  'Out of Stock': { variant: 'destructive' }
};
export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const ITEMS_PER_PAGE = 4;// تعداد محصولاتی که در یک صحفه نمایش داده میشود 
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  // ارایه برای فیلتر کردن محصولات
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const handleDeleteProduct = () => {
    if (productToDelete) {
        setProducts(currentProducts => currentProducts.filter(p => p.id !== productToDelete));
        setProductToDelete(null);
        setIsDeleteDialogOpen(false);
    }
  };
  const openDeleteDialog = (productId: string) => {
    setProductToDelete(productId);
    setIsDeleteDialogOpen(true);
  };
  return (
    <div className='bg-white rounded-lg shadow-md'>
      <div className='px-6 py-4  border-b flex justify-between items-center gap-4 '>
        <div className='w-full max-w-sm'>
          <Input
            placeholder="Search by name or category..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1) }}
          />
             </div>
             <Button>Add New Product</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
             <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
         </TableRow>
        </TableHeader>
        <TableBody>
          { 
            currentProducts.map((product) => (
                  <TableRow key={product.id}>
                 <TableCell className='font-medium'>{product.name}</TableCell>
                 <TableCell className='text-slate-500'>{product.category}</TableCell>
                  <TableCell className='text-slate-500'>{product.price}</TableCell>
                <TableCell className='text-slate-500'>{product.stock}</TableCell>
                <TableCell>
                <Badge variant={stockStatusStyles[product.status].variant}>
                  {product.status}
                </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant='ghost' className='w-8 h-8 p-0'>
                      <span className="sr-only">Open menu</span>
                        <MoreHorizontal className='w-4 h-4' />
                      </Button>
                    </DropdownMenuTrigger>
                                          <DropdownMenuContent align='end'>
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>    
                      <DropdownMenuItem asChild >
                      <Link to={`/products/${product.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                        </Link>
                    </DropdownMenuItem>
                      <DropdownMenuItem onSelect={()=>openDeleteDialog(product.id)} className='text-red-500'><Trash2 className='mr-2 w-4 h-4'/>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        
      </Table>
    {/* Pagination Controls */}
      <div className='px-4 py-4 flex justify-end items-center gap-4'>
        <span className='text-sm text-slate-500'>
          Page {currentPage} of { totalPages}
              </span>
        <div className='gap-2'>
        <Button variant='outline' onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={ currentPage===1}>Previous</Button>
        <Button variant='outline' onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={ currentPage===totalPages}>Next</Button>
            </div>
      </div>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the product from your inventory.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteProduct}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
            </div>
  )
}
