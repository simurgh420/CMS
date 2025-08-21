import {MailList} from "@/components/MailList";
import {MailView} from "@/components/MailView";
import { Card } from "@/components/ui/card";
import { mails } from "@/data/mails"
import { useState } from "react";

export default function MailPage() {
    const [selectedMailId, setSelectedMailId] = useState<string | null>(mails[0].id);
    const selectedMail = mails.find(mail => mail.id === selectedMailId);
  return (
      <Card className="flex flex-row h-[calc(100vh-8rem)] overflow-hidden gap-0 p-0 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
            <MailList 
                mails={mails} 
                onSelectMail={setSelectedMailId} 
                selectedMailId={selectedMailId}
          />
           <MailView mail={selectedMail} />
        </Card>
  )
}
