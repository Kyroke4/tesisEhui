// src/components/Layout.tsx
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;  // Aquí se define el tipo de contenido que se inyectará en el layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className = "min-h-screen flex flex-col">

        <header>
            <Header></Header>
        </header>
      
      <main className = "flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      
      <footer>
            <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
