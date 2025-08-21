import { Bell, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  return (
      <header className='h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-end px-6'>
          <div className='flex items-center gap-4'>
              <ThemeToggle />
              <button className='p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                  <Bell size={20} />
              </button>
              <button className='p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
                  <Settings size={20} />
              </button>
              <Avatar className='w-9 h-9'>
                  <AvatarImage src='https://avatars.githubusercontent.com/u/52625819?v=4&size=64' alt='User Avatar' />
                  <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </div>
     </header>
  )
}
