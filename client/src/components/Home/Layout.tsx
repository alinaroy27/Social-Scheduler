import { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet, useLocation } from 'react-router-dom';
import { MenuIcon } from 'lucide-react';

const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/accounts": "Social Accounts",
    "/schedules": "Post Scheduler",
    "/ai-composer": "AI Composer",
}
const Layout = () => {
    const location = useLocation();
    const title = pageTitles[location.pathname] || "SocialAI";

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className='flex h-screen bg-slate-50'>
        {/*Mobile overlay*/}
    {isMobileMenuOpen && (
            <div className='fixed inset-0 z-20 bg-black/50 lg:hidden' onClick={() => setIsMobileMenuOpen(false)}></div>
        )}
        <Sidebar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        <div className='flex flex-1 flex-col overflow-hidden'>
            {/*top bar*/}
            <header className='h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 md:px-8 gap-4'>
                <button className='md:hidden text-slate-500 hover:text-slate-600 P-2 -ml-2'  onClick={() => setIsMobileMenuOpen(true)}>
                    <MenuIcon className='size-6'/>
                </button>
                <div>
                    <h1 className="text-slate-900">{title}</h1>
                    <p className="text-slate-400 hidden sm:block">Manage and automate your social presence</p>
                </div>
            </header>
            <main className='flex-1 overflow-auto p-4 sm:p-6 md:p-8 xl:p-12'>
                <Outlet />
            </main>
        </div>
        
    </div>
  )
}

export default Layout