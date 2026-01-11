import React from 'react';
import { Info, ArrowRight, BarChart3, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { BetValue } from '../types';

const valueBets: BetValue[] = [
  { match: 'Boca Juniors vs River Plate', league: 'LFP Argentina', date: 'Hoy, 21:00', prediction: 'Local (1)', bookieOdds: 2.45, aiProb: 46.5, ev: 14.2 },
  { match: 'Racing Club vs Independiente', league: 'LFP Argentina', date: 'Mañana, 18:30', prediction: 'Empate (X)', bookieOdds: 3.10, aiProb: 35.2, ev: 9.1 },
  { match: 'Velez Sarsfield vs Estudiantes', league: 'LFP Argentina', date: '25 Sep, 20:00', prediction: 'Visita (2)', bookieOdds: 4.20, aiProb: 25.5, ev: 7.1 },
  { match: 'San Lorenzo vs Talleres', league: 'LFP Argentina', date: '26 Sep, 17:00', prediction: 'Local (1)', bookieOdds: 2.10, aiProb: 50.8, ev: 6.7 },
];

const ValueExplorerView: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      
      {/* Intro Card */}
      <div className="bg-app-surface rounded-2xl p-8 border border-app-border relative overflow-hidden">
         <div className="relative z-10 max-w-3xl">
            <div className="flex items-center space-x-2 text-white font-bold text-lg mb-2">
               <Info className="w-5 h-5 text-app-accent" />
               <h2>¿Qué es el Descubrimiento EV+?</h2>
            </div>
            <p className="text-app-textMuted mb-6 leading-relaxed">
               El Valor Esperado (EV+) representa la brecha entre la probabilidad calculada por la IA de TokenBet y las cuotas actuales del mercado. Un EV positivo significa valor matemático a largo plazo sobre la casa.
            </p>
            <button className="flex items-center text-app-accent font-bold text-sm hover:underline">
               Aprender Estrategia <ArrowRight className="w-4 h-4 ml-2" />
            </button>
         </div>
         {/* Background decoration */}
         <div className="absolute top-0 right-0 h-full w-96 bg-gradient-to-l from-app-surfaceLight via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Filters Toolbar */}
      <div className="flex items-center justify-between">
         <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-app-accent text-app-surface font-bold rounded-lg text-sm">
               <TrendingUpIcon className="w-4 h-4 mr-2" /> Alto Valor (> 5% EV)
            </button>
            <button className="flex items-center px-4 py-2 bg-app-surfaceLight border border-app-border text-white font-medium rounded-lg text-sm hover:bg-white/10 transition-colors">
               <GlobeIcon className="w-4 h-4 mr-2 text-app-textMuted" /> AFA (Argentina) <ChevronDown className="w-4 h-4 ml-2 text-app-textMuted" />
            </button>
            <button className="flex items-center px-4 py-2 bg-app-surfaceLight border border-app-border text-white font-medium rounded-lg text-sm hover:bg-white/10 transition-colors">
               <ClockIcon className="w-4 h-4 mr-2 text-app-textMuted" /> Próximas 24h
            </button>
         </div>
         
         <div className="flex items-center bg-app-surfaceLight rounded-lg border border-app-border p-1">
             <button className="px-3 py-1.5 bg-white/10 text-white text-xs font-bold rounded">Cuadrícula</button>
             <button className="px-3 py-1.5 text-app-textMuted hover:text-white text-xs font-medium rounded">Lista</button>
         </div>
      </div>

      {/* Markets Tabs */}
      <div className="border-b border-app-border">
         <nav className="-mb-px flex space-x-8">
            <button className="border-b-2 border-app-accent pb-4 px-1 text-sm font-bold text-white">Mercados 1X2</button>
            <button className="border-b-2 border-transparent pb-4 px-1 text-sm font-medium text-app-textMuted hover:text-white hover:border-gray-300">Más/Menos</button>
            <button className="border-b-2 border-transparent pb-4 px-1 text-sm font-medium text-app-textMuted hover:text-white hover:border-gray-300">Hándicap Asiático</button>
         </nav>
      </div>

      {/* Data Grid */}
      <div className="bg-app-surface rounded-2xl border border-app-border overflow-hidden">
         {/* Table Header */}
         <div className="grid grid-cols-12 gap-4 p-4 border-b border-app-border text-xs font-bold text-app-textMuted uppercase tracking-wider bg-app-surfaceLight/50">
            <div className="col-span-4">Partido y Liga</div>
            <div className="col-span-2 text-center">Predicción</div>
            <div className="col-span-2 text-center">Cuota Casa</div>
            <div className="col-span-2 text-center">Probabilidad IA</div>
            <div className="col-span-2 text-right">Ventaja (Edge)</div>
         </div>

         {/* Rows */}
         <div className="divide-y divide-app-border">
            {valueBets.map((bet, idx) => (
               <div key={idx} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-white/5 transition-colors group">
                  <div className="col-span-4">
                     <h3 className="font-bold text-white text-sm">{bet.match}</h3>
                     <div className="flex items-center mt-1 text-xs text-app-textMuted">
                        <span className="w-4 h-4 mr-1 rounded bg-blue-500/20 flex items-center justify-center text-[8px]">🇦🇷</span>
                        {bet.league} • {bet.date}
                     </div>
                  </div>

                  <div className="col-span-2 flex justify-center">
                     <span className="px-3 py-1 rounded bg-app-surfaceLight border border-app-border text-xs font-medium text-white">
                        {bet.prediction}
                     </span>
                  </div>

                  <div className="col-span-2 text-center text-white font-bold text-sm font-mono">
                     {bet.bookieOdds.toFixed(2)}
                  </div>

                  <div className="col-span-2 text-center text-white font-bold text-sm font-mono">
                     {bet.aiProb}%
                  </div>

                  <div className="col-span-2 flex justify-end items-center space-x-4">
                     <span className="px-3 py-1 rounded-full bg-app-accent text-app-surface text-xs font-bold">
                        +{bet.ev}% EV
                     </span>
                     <BarChart3 className="w-4 h-4 text-app-accent cursor-pointer hover:scale-110 transition-transform" />
                  </div>
               </div>
            ))}
         </div>
         
         <div className="p-4 text-center border-t border-app-border">
            <button className="text-app-accent text-sm font-medium hover:text-app-accentHover transition-colors">Cargar más apuestas de valor</button>
         </div>
      </div>

      {/* Footer Stats Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-app-surface p-6 rounded-2xl border border-app-border">
            <div className="text-xs font-bold text-app-textMuted uppercase mb-4">Estado del Mercado</div>
            <div className="flex items-baseline space-x-2">
               <span className="text-4xl font-bold text-white">842</span>
               <span className="bg-green-500/20 text-green-400 text-[10px] px-2 py-0.5 rounded uppercase font-bold">Ventajas Activas</span>
            </div>
            <p className="text-xs text-app-textMuted mt-2">La IA escaneó 12,400+ mercados en los últimos 60s.</p>
         </div>

         <div className="bg-app-surface p-6 rounded-2xl border border-app-border">
            <div className="text-xs font-bold text-app-textMuted uppercase mb-4">Mejor Liga</div>
            <div className="flex items-baseline space-x-3">
               <span className="text-4xl font-bold text-white">AFA</span>
               <span className="bg-app-accent/20 text-app-accent text-[10px] px-2 py-0.5 rounded uppercase font-bold">Media 8.4% EV+</span>
            </div>
            <p className="text-xs text-app-textMuted mt-2">Liga Profesional sigue siendo la más ineficiente.</p>
         </div>

         <div className="bg-app-surface p-6 rounded-2xl border border-app-border">
            <div className="text-xs font-bold text-app-textMuted uppercase mb-4">Precisión IA (7d)</div>
            <div className="flex items-baseline space-x-3">
               <span className="text-4xl font-bold text-white">62.1%</span>
               <span className="bg-white/10 text-app-textMuted text-[10px] px-2 py-0.5 rounded uppercase font-bold">CLV Superado</span>
            </div>
            <p className="text-xs text-app-textMuted mt-2">Rendimiento sobre línea de cierre.</p>
         </div>
      </div>
    </div>
  );
};

// Helper Icons for this view
const TrendingUpIcon = ({className}:{className?:string}) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
)
const GlobeIcon = ({className}:{className?:string}) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
)
const ClockIcon = ({className}:{className?:string}) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
)

export default ValueExplorerView;