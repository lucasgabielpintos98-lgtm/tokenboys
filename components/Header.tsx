import React from 'react';
import { Search, Bell, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-16 fixed top-0 right-0 left-64 bg-app-bg/90 backdrop-blur-md border-b border-app-border flex items-center justify-between px-8 z-10">
      <div className="flex items-center w-96">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-app-textMuted" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-app-border rounded-lg leading-5 bg-app-surface text-app-text placeholder-app-textMuted focus:outline-none focus:ring-1 focus:ring-app-accent sm:text-sm"
            placeholder="Buscar mercados, equipos o ligas..."
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-app-textMuted">
          <a href="#" className="hover:text-white transition-colors">Panel</a>
          <a href="#" className="text-app-accent">Análisis en Vivo</a>
          <a href="#" className="hover:text-white transition-colors">Mercado</a>
          <a href="#" className="hover:text-white transition-colors">Ajustes</a>
        </nav>

        <div className="flex items-center space-x-3">
          <button className="bg-app-accent hover:bg-app-accentHover text-app-surface px-4 py-1.5 rounded text-sm font-bold transition-colors">
            Depositar
          </button>
          <button className="p-2 text-app-textMuted hover:text-white hover:bg-app-surface rounded-full transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 text-app-textMuted hover:text-white hover:bg-app-surface rounded-full transition-colors">
            <div className="w-8 h-8 rounded-full bg-app-surfaceLight flex items-center justify-center border border-app-border">
              <User className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;