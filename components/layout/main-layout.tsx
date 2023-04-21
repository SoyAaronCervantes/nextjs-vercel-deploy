import React from 'react';
import Navbar from "@/components/navbar";

export const MainLayout = ({ children }: any) => {
  return (
    <div className="[ flex flex-col p-8 gap-8 ] [ min-h-screen ]">
      <Navbar/>
      <main className="[ flex justify-center gap-8 ]">
        {children}
      </main>
    </div>
  );
};

