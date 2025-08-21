import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
    name: z.string().min(3, "Product name must be at least 3 characters."),
    category: z.string().nonempty("Category is required."),
    price: z.string().refine(val => !isNaN(parseFloat(val)), { message: "Price must be a number." }),
    stock: z.string().refine(val => !isNaN(parseInt(val)), { message: "Stock must be a number." }),
    status: z.enum(["In Stock", "Low Stock", "Out of Stock"]),
  });
  type ProductFormData = z.infer<typeof formSchema>;
  interface ProductFormProps {
    initialData?: ProductFormData;
  }
export function ProductForm({ initialData }: ProductFormProps) {
  const form = useForm<ProductFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      category: "",
      price: "",
      stock: "",
    },
  });
    function onSubmit(values: ProductFormData) {
        if (initialData) {
          console.log("Product Updated!", values);
          alert("Product updated successfully!");
        } else {
          console.log("New Product Created!", values);
          alert("Product created successfully!");
          form.reset();
        }
      }
  return (
    <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField control={form.control} name="name" render={({ field }) => ( <FormItem> <FormLabel>Product Name</FormLabel> <FormControl><Input placeholder="e.g. Wireless Mouse"  {...field} /></FormControl> <FormMessage /> </FormItem> )} />
            <FormField control={form.control} name="category" render={({ field }) => ( <FormItem> <FormLabel>Category</FormLabel> <FormControl><Input placeholder="e.g. Electronics"  {...field} /></FormControl> <FormMessage /> </FormItem> )} />
            <FormField control={form.control} name="price" render={({ field }) => ( <FormItem> <FormLabel>Price</FormLabel> <FormControl><Input type="number" placeholder="e.g. 25.00"  {...field} /></FormControl> <FormMessage /> </FormItem> )} />
            <FormField control={form.control} name="stock" render={({ field }) => (<FormItem><FormLabel>stock</FormLabel><FormControl><Input type="number" placeholder="e.g. 150"   {...field} /></FormControl><FormMessage/></FormItem>) } />
              <FormField
                  control={form.control}
                  name="status" 
                  render={({ field }) => (
                      <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value }>
                              <FormControl>
                                  <SelectTrigger>
                                      <SelectValue placeholder="Select a status"/>
                                  </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                  <SelectItem value="In Stock">In Stock</SelectItem>
                                  <SelectItem value="Low Stock">Low Stock</SelectItem>
                                  <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                              </SelectContent>
                          </Select>
                      </FormItem>
                  )} />
              <Button type="submit">{initialData ? 'Update Product' : 'Create Product' }</Button>
          </form>
        </Form>
  )
}
