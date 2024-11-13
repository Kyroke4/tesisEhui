// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import { Sidebar } from '@/components/sidebar';
import { MobileHeader } from '@/components/mobile-header';

interface LayoutProps {
  children: ReactNode;  // Aquí se define el tipo de contenido que se inyectará en el layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MobileHeader></MobileHeader>

      <Sidebar className="hidden lg:flex"></Sidebar>
      <main className = "lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">
            {children}
        </div>
      </main>

      {/* <footer>
          <Footer></Footer>
      </footer> */}
    </>
    
  );
};

export default Layout;
