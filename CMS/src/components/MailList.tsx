import type { Mails } from "@/types/type"

interface MailListProps {
    mails: Mails[];
    onSelectMail: (id: string) => void;
    selectedMailId: string | null;
}

export function MailList({ mails, onSelectMail, selectedMailId }: MailListProps) {
    return (
        <div className="w-full max-w-xs border-r border-slate-200 dark:border-slate-700">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Inbox</h2>
            </div>
            <div className="overflow-y-auto">
                {mails.map((mail) => (
                    <div
                        key={mail.id}
                        onClick={() => onSelectMail(mail.id)}
                        className={`p-4 cursor-pointer border-b border-slate-200 dark:border-slate-700 ${
                            selectedMailId === mail.id 
                                ? 'bg-slate-100 dark:bg-slate-800' 
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                    >
                        <p className={`font-semibold ${!mail.read ? 'text-slate-900 dark:text-slate-100' : 'text-slate-600 dark:text-slate-400'}`}>
                            {mail.sender}
                        </p>
                        <p className={`text-sm truncate ${!mail.read ? 'text-slate-700 dark:text-slate-300' : 'text-slate-500 dark:text-slate-500'}`}>
                            {mail.subject}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}