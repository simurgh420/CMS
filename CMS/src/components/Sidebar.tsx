import { NavLink } from "react-router";
import { Home, BarChart2, ShoppingCart, Users, UserPlus, Package, Mail, MessageSquare, Briefcase, AlertCircle } from "lucide-react";


type NavLinkItem = {
    to: string;
    text: string;
    icon: React.ReactNode;
    end?: boolean; 
};
type NavGroup = {
    title: string,
    links:NavLinkItem[]
}
const navGroups:NavGroup[]= [
    {
        title: 'Dashboard',
        links: [
            { to: '/', text: 'Home', icon: <Home size={20} />, end: true },
            { to: '/analytics', text: 'Analytics', icon: <BarChart2 size={20} /> },
            { to: '/sales', text: 'Sales', icon: <ShoppingCart size={20} /> },
        ],
    },
    {
        title: 'Quick Menu',
        links: [
            { to: '/users', text: 'Users', icon: <Users size={20} /> },
            { to: '/users/new', text: 'New User', icon: <UserPlus size={20} /> },
            { to: '/products', text: 'Products ', icon: <Package size={20} /> }, 
        ],
    },
    {
        title: 'Notifications',
        links: [
            { to: '/mail', text: 'Mail', icon: <Mail size={20} /> },
            { to: '/feedback', text: 'Feedback', icon: <MessageSquare size={20} /> },
        ],  
    },
    {
        title: 'Staff',
        links: [
            { to: '/manage', text: 'Manage', icon: <Briefcase size={20} /> },
            { to: '/analytics-staff', text: 'Analytics', icon: <BarChart2 size={20} /> },
            { to: '/reports-staff', text: 'Reports', icon: <AlertCircle size={20} /> },
        ]

    }
]


export default function Sidebar() {
  return (
      <aside className="flex flex-col flex-shrink-0 w-64 bg-white border-r border-slate-200">
          <div className="h-16 flex items-center justify-center border-b border-slate-200">
              <h1 className="text-2xl font-bold text-blue-600">Admin Dashboard</h1>
              {/* لوگو */}
          </div>
          {/* بخش نوار سایت  */}
          <nav className="flex-1 p-4 space-y-4">
      
              {navGroups.map((group) => (
                  <div key={group.title}>
                      <h3 className="px-3 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                          {group.title}</h3>
                      <div className="space-y-2">
                          {group.links.map((link) => (
                              <NavLink
                                  key={link.to}
                                  to={link.to}
                                  end={link.end}
                                  className={({ isActive }) =>
                                      `flex items-center px-4 py-2 gap-3 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors
                                   ${isActive ? 'bg-blue-50 text-blue-500 font-semibold' : ''}`} >
                                  {link.icon}
                                  <span>{ link.text}</span>
                              </NavLink>
                          ))
                              
                          }

                      </div>
                  </div>
                
                  
              ))
                  
              }

          </nav>



     </aside>
      
  )
}

