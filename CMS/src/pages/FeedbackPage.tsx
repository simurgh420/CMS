
import FeedbackForm from "@/components/FeedbackForm";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


export default function FeedbackPage() {
  return (
      <Card>
          <CardHeader>
              <CardTitle>Submit Feedback</CardTitle>
              <CardDescription>We would love to hear your thoughts. Let us know how we can improve.</CardDescription>
          </CardHeader>
          <CardContent>
              <p>Feedback form will be here.</p>
                <FeedbackForm/>
                </CardContent>
               
        </Card>
  )
}
