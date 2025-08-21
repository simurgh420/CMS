import type { Mails } from "@/types/type";

interface MailViewProps {
    mail: Mails | undefined;
}

export function MailView({ mail }: MailViewProps) {
    if (!mail) {
        return (
            <div className="flex-1 flex items-center justify-center text-slate-500 dark:text-slate-400">
                <p>Select an email to read</p>
            </div>
        );
    }

    return (
        <div className="flex-1 p-6 space-y-4">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{mail.subject}</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">From: {mail.sender}</p>
            </div>
            <div>
                <p className="text-slate-800 dark:text-slate-200 leading-relaxed">{mail.body}</p>
            </div>
        </div>
    );
}