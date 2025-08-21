
import { Outlet } from 'react-router';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import { Toaster } from 'sonner';

export default function MainLayout() {
  return (
    <div className='flex min-h-screen bg-slate-100 dark:bg-slate-950'>
      {/* Sidebar */}
      <Sidebar /> 
      <div className='flex-1 flex flex-col'>
        {/* Navbar */}
        <Navbar /> 
        {/* Main Content */}
        <main className='p-4'>
            <Outlet />
        </main>
      </div>
      <Toaster richColors position="top-right" />
    </div>
  )
}
