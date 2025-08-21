import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import UserForm from "./UserForm";

export default function NewUserPage() {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-slate-500 text-center tracking-wide">Create New User</CardTitle>
        <CardDescription className="text-center tracking-wid ">Fill out the form below to add a new user to the system.</CardDescription>
      </CardHeader>
      <CardContent>
        <UserForm/>
      </CardContent>
   </Card>
  )
}
