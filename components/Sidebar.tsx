import React from 'react';
import { 
  LayoutDashboard, 
  Activity, 
  TrendingUp, 
  Wallet, 
  Settings, 
  ShieldCheck, 
  Gem,
  LogOut
} from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  const menuItems = [
    { id: ViewState.LIVE_ANALYSIS, label: 'Análisis en Vivo', icon: Activity },
    { id: ViewState.VALUE_EXPLORER, label: 'Explorador EV+', icon: TrendingUp },
    { id: ViewState.BANKROLL_HEALTH, label: 'Salud del Bankroll', icon: Wallet },
  ];

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-app-surface border-r border-app-border flex flex-col z-20">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-app-border">
        <Gem className="w-6 h-6 text-app-accent mr-3" />
        <span className="text-xl font-bold tracking-tight text-white">TokenBet</span>
      </div>

      {/* Main Nav */}
      <div className="flex-1 py-6 px-3 space-y-1">
        <div className="px-3 mb-2 text-xs font-semibold text-app-textMuted uppercase tracking-wider">
          Plataforma
        </div>
        <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg text-app-textMuted hover:bg-app-surfaceLight hover:text-white transition-colors">
          <LayoutDashboard className="w-5 h-5 mr-3" />
          Panel Principal
        </button>
        
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
              currentView === item.id 
                ? 'bg-app-surfaceLight text-app-accent' 
                : 'text-app-textMuted hover:bg-app-surfaceLight hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </button>
        ))}

        <div className="px-3 mt-8 mb-2 text-xs font-semibold text-app-textMuted uppercase tracking-wider">
          Configuración
        </div>
        <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg text-app-textMuted hover:bg-app-surfaceLight hover:text-white transition-colors">
          <ShieldCheck className="w-5 h-5 mr-3" />
          Límites y Controles
        </button>
        <button className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg text-app-textMuted hover:bg-app-surfaceLight hover:text-white transition-colors">
          <Settings className="w-5 h-5 mr-3" />
          Ajustes
        </button>
      </div>

      {/* Pro Account CTA */}
      <div className="p-4 border-t border-app-border">
        <div className="bg-app-surfaceLight rounded-xl p-4 border border-app-border">
          <h4 className="text-xs font-bold text-white uppercase mb-1">Cuenta Pro</h4>
          <p className="text-xs text-app-textMuted mb-3">Estás usando el explorador básico.</p>
          <button className="w-full py-2 bg-app-accent hover:bg-app-accentHover text-app-surface font-bold text-xs rounded transition-colors">
            Mejorar para 5% EV+
          </button>
        </div>
        <div className="mt-4 flex items-center px-2 text-app-textMuted hover:text-white cursor-pointer">
          <LogOut className="w-4 h-4 mr-2" />
          <span className="text-xs font-medium">Cerrar Sesión</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;