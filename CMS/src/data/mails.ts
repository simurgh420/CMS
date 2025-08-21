import {  type Mails} from "@/types/type"


export const mails:Mails[] = [
    { id: '1', sender: 'GitHub', subject: 'Your weekly digest', body: 'Here is your weekly digest from GitHub...', read: true },
    { id: '2', sender: 'Vercel', subject: 'Deployment Successful', body: 'Your project has been deployed successfully.', read: false },
    { id: '3', sender: 'Slack', subject: 'New message from John Doe', body: 'John: Hey, are you free for a meeting?', read: false },
    { id: '4', sender: 'Stripe', subject: 'Your monthly invoice', body: 'Here is your invoice for August 2025.', read: true },
]