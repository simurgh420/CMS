import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import ProductForm from '@/pages/ProductForm';

export default function NewProductPage() {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">NewProduct</CardTitle>
        <CardDescription className="text-slate-500">
          Fill out the form below to add a new user to the system.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProductForm />
      </CardContent>
    </Card>
  );
}
