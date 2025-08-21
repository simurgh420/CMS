import { useParams } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { products } from "../data/products"
import {ProductForm} from './ProductForm';
export default function EditProductPage() {
    const { productId } = useParams<{ productId: string }>();
    const productToEdit = products.find(p => p.id === productId);
    if (!productToEdit) {
        return <div>Product not found!</div>;
    }
  return (
    <Card className="max-w-3xl mx-auto">
    <CardHeader>
        <CardTitle>Edit Product</CardTitle>
        <CardDescription>Update the product information below.</CardDescription>
    </CardHeader>
    <CardContent>
        <ProductForm initialData={productToEdit} />
    </CardContent>
</Card>
  )
}
