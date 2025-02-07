import React from 'react'
import Sidebar from '../ui/side-nav';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <div className='sm:py-[3rem] lg:pl-[25rem] md:pl-[8rem]'>
        <Sidebar />
        {children}      
    </div>
   
  );
}