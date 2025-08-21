import { Bell, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function Navbar() {
  return (
      <header className='h-16 bg-white border-b border-slate-200 flex  items-center justify-end px-6'>
          <div className='flex items-center gap-4'>
              <button className='p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors '>
                  <Bell size={20} />
              </button>
              <button className='p-2 rounded-full text-slate-600 hover:bg-slate-100 transition-colors '>
                  <Settings size={20} />
                  </button>
          <Avatar className='w-9 h-9'>
              <AvatarImage src='https://avatars.githubusercontent.com/u/52625819?v=4&size=64'alt='User Avatar' />
              <AvatarFallback>CN</AvatarFallback>
              </Avatar>
          </div>
     </header>
  )
}
