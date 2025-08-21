
// // ۱. تعریف اسکیمای اعتبارسنجی با Zod
// const formSchema = z.object({
//     name: z.string().min(2, {
//       message: "Username must be at least 2 characters.",
//     }),
//     email: z.string().email({
//       message: "Please enter a valid email address.",
//     }),
//     password: z.string().min(8, {
//       message: "Password must be at least 8 characters.",
//     }),
//     role: z.enum(["admin", "editor", "viewer"], {
//         message: "You need to select a role.",
//     })
//  });
//  type UserFormData = z.infer<typeof formSchema>;
// interface UserFormProps {
//   initialData?: Partial<UserFormData>;
// }

// export default function UserForm({ initialData }:UserFormProps) {
//     // ۲. تعریف فرم با استفاده از react-hook-form
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues:initialData  ||{
//         name: "",
//       email: "",
//       password: "",
//     },
//   });
//       // ۳. تعریف تابع برای ارسال فرم
//       function onSubmit(values: z.infer<typeof formSchema>) {
//         if (initialData) {
//           console.log("Form Updated!", values);
//           alert("User updated successfully!");
//         } else {
//           console.log("Form Submitted!", values);
//           alert("User created successfully!");
//           form.reset();
//         }
//       }







// <Form {...form}>
// <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//     <FormField
//         control={form.control}
//         name="name"
//         render={({ field }) => (
//             <FormItem>
//                 <FormLabel>Username</FormLabel>
//                 <FormControl>
//                     <Input placeholder="John Doe" {...field} />
//                 </FormControl>
//                 <FormDescription>This is the user's public display name.</FormDescription>
//                 <FormMessage/>
//             </FormItem>
//         )}
//     />
//      <FormField
//         control={form.control}
//         name="email"
//         render={({ field }) => (
//             <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                     <Input type="email" placeholder="user@example.com" {...field} />
//                 </FormControl>
//                 <FormMessage/>
//             </FormItem>
//         )}
//     />
//             <FormField
//         control={form.control}
//         name="password"
//         render={({ field }) => (
//             <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                     <Input type="password"{...field} />
//                 </FormControl>
//                 <FormMessage/>
//             </FormItem>
//         )}
//     />
//     <FormField
//         control={form.control}
//         name="role"
//         render={({ field }) => (
//             <FormItem>
//                 <FormLabel>Role</FormLabel>
//                 <Select onValueChange={field.onChange} defaultValue={field.value}>
//                     <FormControl>
//                         <SelectTrigger>
//                             <SelectValue placeholder='Select a role' />
//                         </SelectTrigger>
//                     </FormControl>    
//                     <SelectContent>
//                         <SelectItem value="admin">Admin</SelectItem>
//                         <SelectItem value="editor">Editor</SelectItem>
//                         <SelectItem value="viewer">viewer</SelectItem>
//                     </SelectContent>
//                 </Select>
//                 <FormMessage/>
//             </FormItem>
//         )}  />
//      <Button type="submit">{initialData ? 'Update User' : 'Create User'}</Button>
// </form>
//   </Form>