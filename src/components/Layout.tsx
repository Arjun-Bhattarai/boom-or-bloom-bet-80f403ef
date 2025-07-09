
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import ParticleBackground from './ParticleBackground';
import { Toaster } from '@/components/ui/toaster';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
