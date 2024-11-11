// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';


interface LayoutProps {
  children: ReactNode;  // Aquí se define el tipo de contenido que se inyectará en el layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col h-full">
        <div className="flex flex-col h-full w-full">
          { children }
        </div>

      </div>
    </>
    
  );
};

export default Layout;
