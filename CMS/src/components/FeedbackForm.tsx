import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

export default function FeedbackForm() {
  const formSchema = z.object({
    feedback: z.string(),
    rating: z.number().min(1, { message: 'Please provide a rating.' }),
  });
  type FeedBackFormData = z.infer<typeof formSchema>;
  const [hoverRating, setHoverRating] = useState(0);
  const form = useForm<FeedBackFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      feedback: '',
      rating: 0,
    },
  });
  function onSubmit(values: FeedBackFormData) {
    console.log('Feedback Submitted!', values);
    toast.success('Thank you for your feedback!');
    form.reset();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <div className="flex items-center gap-2">
                  {/* بخش نمایش ستاره در فورم */}
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="cursor-pointer transition-colors"
                      onClick={() => field.onChange(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      fill={
                        star <= (hoverRating || field.value)
                          ? '#f59e0b'
                          : 'none'
                      }
                      stroke={
                        star <= (hoverRating || field.value)
                          ? '#f59e0b'
                          : 'currentColor'
                      }
                    />
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* بخش نمایش متن فرم  */}
        <FormField
          control={form.control}
          name="feedback"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us what you think..."
                  className="resize-none"
                  rows={6}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit Feedback</Button>
      </form>
    </Form>
  );
}
