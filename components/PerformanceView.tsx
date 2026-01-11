import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Download, Settings2, Clock, PauseCircle, ShieldAlert } from 'lucide-react';

const roiData = [
  { day: 'Sem 1', value: 1000 },
  { day: 'S1-2', value: 1200 },
  { day: 'S1-4', value: 1150 },
  { day: 'Sem 2', value: 1600 },
  { day: 'S2-3', value: 1550 },
  { day: 'Sem 3', value: 2100 },
  { day: 'S3-4', value: 1900 },
  { day: 'Sem 4', value: 2450 },
  { day: 'S4-2', value: 2300 },
];

const PerformanceView: React.FC = () => {
  const [dailyLimit, setDailyLimit] = useState(true);
  const [stopLoss, setStopLoss] = useState(true);

  return (
    <div className="p-8 space-y-8">
      
      {/* Header */}
      <div className="flex justify-between items-end">
         <div>
            <h1 className="text-3xl font-bold text-white mb-2">Salud del Bankroll</h1>
            <p className="text-app-textMuted">Resumen detallado de sostenibilidad y métricas ROI de los últimos 30 días.</p>
         </div>
         <div className="flex space-x-3">
            <button className="flex items-center px-4 py-2 bg-app-surfaceLight border border-app-border text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
               <Download className="w-4 h-4 mr-2" /> Exportar Datos
            </button>
            <button className="flex items-center px-4 py-2 bg-app-accent hover:bg-app-accentHover text-app-surface font-bold rounded-lg transition-colors">
               <Settings2 className="w-4 h-4 mr-2" /> Ajustar Estrategia
            </button>
         </div>
      </div>

      {/* Main Graph Card */}
      <div className="bg-app-surface rounded-2xl p-6 border border-app-border">
         <div className="flex justify-between items-start mb-6">
            <div>
               <h3 className="text-lg font-bold text-white">Crecimiento Neto y Tendencias ROI</h3>
               <p className="text-sm text-app-textMuted">Rendimiento agregado en todos los mercados deportivos</p>
            </div>
            <div className="text-right">
               <div className="text-3xl font-bold text-app-accent">+14.2% ROI</div>
               <div className="text-sm font-medium text-green-400">Últimos 30 Días ↗ 2.4%</div>
            </div>
         </div>

         <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={roiData}>
                  <defs>
                     <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00e578" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#00e578" stopOpacity={0}/>
                     </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1a" vertical={false} />
                  <XAxis dataKey="day" stroke="#94a3b8" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                  <YAxis hide />
                  <Tooltip 
                     contentStyle={{backgroundColor: '#0d1f1a', border: '1px solid #ffffff1a', borderRadius: '8px'}}
                     itemStyle={{color: '#fff'}}
                  />
                  <Area type="monotone" dataKey="value" stroke="#00e578" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
               </AreaChart>
            </ResponsiveContainer>
         </div>
         <div className="flex justify-between px-2 text-xs font-bold text-app-textMuted uppercase mt-2">
            <span>Semana 1</span>
            <span>Semana 2</span>
            <span>Semana 3</span>
            <span>Semana 4</span>
         </div>
      </div>

      {/* Stats Cards */}
      <div>
         <h3 className="text-lg font-bold text-white mb-4">Estadísticas de Transparencia</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-app-surface p-6 rounded-2xl border border-app-border">
               <div className="text-xs font-bold text-app-textMuted uppercase mb-2">Depósitos Totales (Histórico)</div>
               <div className="text-2xl font-bold text-white mb-2">45,200.00 USDT</div>
               <div className="text-xs text-app-textMuted">📅 Desde Oct 2023</div>
            </div>

            <div className="bg-app-surface p-6 rounded-2xl border border-app-border">
               <div className="text-xs font-bold text-app-textMuted uppercase mb-2">Retiros Totales (Histórico)</div>
               <div className="text-2xl font-bold text-app-accent mb-2">38,750.00 USDT</div>
               <div className="flex items-center text-xs text-green-400 font-bold">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div> Ratio Recuperación 85%
               </div>
            </div>

            <div className="bg-app-surface p-6 rounded-2xl border border-app-border relative overflow-hidden">
               <div className="text-xs font-bold text-app-textMuted uppercase mb-2">Retiro Pendiente</div>
               <div className="flex items-center space-x-3 mb-2">
                  <div className="text-2xl font-bold text-white">2,500.00 USDT</div>
                  <span className="bg-green-900/40 text-green-400 text-[10px] px-2 py-0.5 rounded uppercase font-bold border border-green-900">Procesando</span>
               </div>
               <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-3">
                  <div className="w-2/3 h-full bg-green-500"></div>
               </div>
               <div className="text-[10px] text-app-textMuted mt-2">Llegada estimada: En 4 horas</div>
            </div>
         </div>
      </div>

      {/* Self-Regulation Controls */}
      <div>
         <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-white">Controles de Autorregulación</h3>
            <span className="px-3 py-1 bg-green-900/20 text-green-400 border border-green-900/50 rounded-full text-xs font-bold flex items-center">
               <ShieldAlert className="w-3 h-3 mr-2" /> Estado Usuario Responsable: Activo
            </span>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Control 1 */}
            <div className="bg-app-surface p-6 rounded-2xl border border-app-border flex items-center justify-between">
               <div className="flex items-center space-x-4">
                  <div className="bg-app-surfaceLight p-3 rounded-lg text-app-textMuted">
                     <Settings2 className="w-6 h-6" />
                  </div>
                  <div>
                     <div className="text-sm font-bold text-white">Límite Depósito Diario</div>
                     <div className="text-xs text-app-textMuted">Limitar depósitos a 500 USDT / día</div>
                  </div>
               </div>
               <button 
                  onClick={() => setDailyLimit(!dailyLimit)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${dailyLimit ? 'bg-app-accent' : 'bg-gray-600'}`}
               >
                  <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${dailyLimit ? 'translate-x-6' : 'translate-x-0'}`}></div>
               </button>
            </div>

            {/* Control 2 */}
            <div className="bg-app-surface p-6 rounded-2xl border border-app-border flex items-center justify-between">
               <div className="flex items-center space-x-4">
                  <div className="bg-app-surfaceLight p-3 rounded-lg text-app-textMuted">
                     <Clock className="w-6 h-6" />
                  </div>
                  <div>
                     <div className="text-sm font-bold text-white">Alerta Duración Sesión</div>
                     <div className="text-xs text-app-textMuted">Temporizador: quedan 45m</div>
                  </div>
               </div>
               <select className="bg-app-surfaceLight border border-app-border text-white text-xs rounded p-2 focus:outline-none">
                  <option>1 Hora</option>
                  <option>2 Horas</option>
                  <option>4 Horas</option>
               </select>
            </div>
            
            {/* Control 3 */}
            <div className="bg-app-surface p-6 rounded-2xl border border-app-border flex items-center justify-between">
               <div className="flex items-center space-x-4">
                  <div className="bg-app-surfaceLight p-3 rounded-lg text-app-textMuted">
                     <TrendingUpIcon className="w-6 h-6" />
                  </div>
                  <div>
                     <div className="text-sm font-bold text-white">Disparador Stop-Loss</div>
                     <div className="text-xs text-app-textMuted">Auto-bloqueo al perder -1,000 USDT</div>
                  </div>
               </div>
               <button 
                  onClick={() => setStopLoss(!stopLoss)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${stopLoss ? 'bg-app-accent' : 'bg-gray-600'}`}
               >
                  <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${stopLoss ? 'translate-x-6' : 'translate-x-0'}`}></div>
               </button>
            </div>

            {/* Control 4 */}
            <div className="bg-red-900/10 p-6 rounded-2xl border border-red-900/30 flex items-center justify-between border-dashed">
               <div className="flex items-center space-x-4">
                  <div className="bg-red-900/20 p-3 rounded-lg text-red-500">
                     <PauseCircle className="w-6 h-6" />
                  </div>
                  <div>
                     <div className="text-sm font-bold text-red-400">Enfriamiento Instantáneo</div>
                     <div className="text-xs text-red-300/60">Suspender cuenta por 24 horas</div>
                  </div>
               </div>
               <button className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded shadow transition-colors">
                  Tomar Descanso
               </button>
            </div>

         </div>
      </div>

      {/* Sustainability Commitment */}
      <div className="bg-app-surfaceLight/50 p-6 rounded-2xl border border-app-border flex items-start space-x-6">
         <div className="w-12 h-12 bg-app-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
            <ShieldAlert className="w-6 h-6 text-app-accent" />
         </div>
         <div>
            <h4 className="text-white font-bold mb-1">Compromiso de Sostenibilidad TokenBet</h4>
            <p className="text-sm text-app-textMuted leading-relaxed">
               Estamos comprometidos a proporcionar herramientas que te ayuden a apostar responsablemente. Tus datos están encriptados y se usan solo para estas métricas. Recuerda: apuesta solo lo que puedas permitirte perder.
            </p>
         </div>
      </div>
    </div>
  );
};

// Reusing icon for visual consistency in this file
const TrendingUpIcon = ({className}:{className?:string}) => (
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
)

export default PerformanceView;