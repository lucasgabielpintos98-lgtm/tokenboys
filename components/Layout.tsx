import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { ViewState } from '../types';

interface LayoutProps {
  currentView: ViewState;
  setCurrentView: (view: ViewState) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentView, setCurrentView, children }) => {
  return (
    <div className="min-h-screen bg-app-bg text-app-text font-sans selection:bg-app-accent selection:text-app-surface">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <Header />
      
      <main className="pl-64 pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
        
        {/* Footer */}
        <footer className="mt-12 border-t border-app-border py-8 px-8 text-xs text-app-textMuted flex justify-between">
           <div>
              &copy; 2024 TokenBet Profesional. Juego responsable 18+.
           </div>
           <div className="space-x-6">
              <a href="#" className="hover:text-white">Documentación API</a>
              <a href="#" className="hover:text-white">Centro de Ayuda</a>
              <a href="#" className="hover:text-white">Política de Privacidad</a>
           </div>
        </footer>
      </main>
    </div>
  );
};

export default Layout;