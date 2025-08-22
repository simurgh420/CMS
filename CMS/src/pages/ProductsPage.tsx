import { useState } from 'react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { products as initialProducts } from '@/data/products';
import { Link } from 'react-router';
// استایل برای وضعیت انبار
const stockStatusStyles: {
  [key: string]: { variant: 'default' | 'secondary' | 'destructive' };
} = {
  'In Stock': { variant: 'default' },
  'Low Stock': { variant: 'secondary' },
  'Out of Stock': { variant: 'destructive' },
};
export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const ITEMS_PER_PAGE = 4; // تعداد محصولاتی که در یک صحفه نمایش داده میشود
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  // ارایه برای فیلتر کردن محصولات
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const handleDeleteProduct = () => {
    setProducts((currentProducts) =>
      currentProducts.filter((p) => p.id !== productToDelete),
    );
    setProductToDelete(null);
    setIsDeleteDialogOpen(false);
    toast.success('Product has been deleted successfully.');
  };
  const openDeleteDialog = (productId: string) => {
    setProductToDelete(productId);
    setIsDeleteDialogOpen(true);
  };
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
      <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center gap-4">
        <div className="w-full max-w-sm">
          <Input
            placeholder="Search by name or category..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <Link to="/products/new">
          <Button>Add New Product</Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="border-slate-200 dark:border-slate-700">
            <TableHead className="text-slate-900 dark:text-slate-100">
              Product Name
            </TableHead>
            <TableHead className="text-slate-900 dark:text-slate-100">
              Category
            </TableHead>
            <TableHead className="text-slate-900 dark:text-slate-100">
              Price
            </TableHead>
            <TableHead className="text-slate-900 dark:text-slate-100">
              Stock
            </TableHead>
            <TableHead className="text-slate-900 dark:text-slate-100">
              Status
            </TableHead>
            <TableHead className="text-slate-900 dark:text-slate-100">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentProducts.map((product) => (
            <TableRow
              key={product.id}
              className="border-slate-200 dark:border-slate-700"
            >
              <TableCell className="font-medium text-slate-900 dark:text-slate-100">
                {product.name}
              </TableCell>
              <TableCell className="text-slate-500 dark:text-slate-400">
                {product.category}
              </TableCell>
              <TableCell className="text-slate-500 dark:text-slate-400">
                {product.price}
              </TableCell>
              <TableCell className="text-slate-500 dark:text-slate-400">
                {product.stock}
              </TableCell>
              <TableCell>
                <Badge variant={stockStatusStyles[product.status].variant}>
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700"
                  >
                    <DropdownMenuLabel className="text-slate-900 dark:text-slate-100">
                      Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem
                      asChild
                      className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <Link to={`/products/${product.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" />
                        <span>Edit</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onSelect={() => openDeleteDialog(product.id)}
                      className="text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <Trash2 className="mr-2 w-4 h-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Pagination Controls */}
      <div className="px-6 py-6 border-t border-slate-200 dark:border-slate-700 flex justify-end items-center gap-4">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Page {currentPage} of {totalPages}
        </span>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Next
          </Button>
        </div>
      </div>
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-slate-900 dark:text-slate-100">
              Are you sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 dark:text-slate-400">
              This will permanently delete the product from your inventory.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteProduct}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
