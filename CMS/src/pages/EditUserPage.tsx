import { useParams } from 'react-router';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { users } from '@/data/users';
import UserForm from './UserForm';
export default function EditUserPage() {
  const { userid } = useParams<{ userid: string }>();
  const userToEdit = users.find((user) => String(user.id) === userid);
  if (!userToEdit) {
    return <div>User not found!</div>;
  }
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Edit User</CardTitle>
        <CardDescription>Update the user's information below.</CardDescription>
      </CardHeader>
      <CardContent>
        <UserForm initialData={userToEdit} />
      </CardContent>
    </Card>
  );
}
