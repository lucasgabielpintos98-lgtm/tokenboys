import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Clock, AlertCircle, Info, Target, Zap, TrendingUp, RefreshCw, Wind } from 'lucide-react';

const xGData = [
  { min: '0\'', home: 0.0, away: 0.0 },
  { min: '15\'', home: 0.3, away: 0.1 },
  { min: '30\'', home: 0.5, away: 0.15 },
  { min: '45\'', home: 0.8, away: 0.2 },
  { min: 'HT', home: 0.8, away: 0.2 },
  { min: '60\'', home: 1.4, away: 0.3 },
  { min: '64\'', home: 1.84, away: 0.5 }, // Current spike for Home
  { min: '75\'', home: null, away: null },
  { min: '90\'', home: null, away: null },
];

const LiveMatchView: React.FC = () => {
  return (
    <div className="p-8 space-y-6">
      {/* Breadcrumbs */}
      <div className="text-sm text-app-textMuted">
        Fútbol <span className="mx-2">/</span> Superliga Argentina <span className="mx-2">/</span> <span className="text-white">River Plate vs Boca Juniors</span>
      </div>

      {/* Match Header Card */}
      <div className="bg-app-surface rounded-2xl p-6 border border-app-border flex items-center justify-between relative overflow-hidden">
        {/* Teams and Score */}
        <div className="flex items-center space-x-12 z-10">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border-2 border-red-600 flex items-center justify-center mb-2 mx-auto">
               {/* Placeholder Logo */}
               <span className="text-xl font-bold text-red-500">RIV</span>
            </div>
            <h2 className="text-white font-bold">River Plate</h2>
          </div>

          <div className="text-center">
             <div className="text-6xl font-bold text-white tracking-tighter">1 - 0</div>
             <div className="flex items-center justify-center text-app-accent font-medium mt-1">
                <div className="w-2 h-2 rounded-full bg-app-accent animate-pulse mr-2"></div>
                64' VIVO
             </div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border-2 border-blue-600 flex items-center justify-center mb-2 mx-auto">
               <span className="text-xl font-bold text-blue-500">BOC</span>
            </div>
            <h2 className="text-white font-bold">Boca Juniors</h2>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex flex-col items-end z-10">
           <div className="text-right text-app-textMuted text-sm mb-4">El Monumental, Buenos Aires</div>
           <div className="flex space-x-3">
              <button className="flex items-center px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-app-border transition-colors">
                 <TrendingUp className="w-4 h-4 mr-2" />
                 Mercados en Vivo
              </button>
              <button className="flex items-center px-4 py-2 bg-app-accent hover:bg-app-accentHover text-app-surface font-bold rounded-lg transition-colors">
                 <Target className="w-4 h-4 mr-2" />
                 Alerta xG
              </button>
           </div>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-app-surfaceLight to-transparent opacity-50 pointer-events-none"></div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Col: Charts & Stats (8 cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* xG Engine Chart */}
          <div className="bg-app-surface rounded-2xl p-6 border border-app-border">
            <div className="flex items-center justify-between mb-6">
               <div>
                  <h3 className="text-lg font-bold text-white">Motor de Evolución xG</h3>
                  <p className="text-sm text-app-textMuted">Flujo de calidad del partido en tiempo real (90 min)</p>
               </div>
               <div className="flex bg-app-surfaceLight rounded-lg p-1">
                  <button className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded">Global</button>
                  <button className="px-3 py-1 text-app-textMuted hover:text-white text-xs font-medium rounded">1ª Mitad</button>
                  <button className="px-3 py-1 text-app-textMuted hover:text-white text-xs font-medium rounded">2ª Mitad</button>
               </div>
            </div>

            <div className="h-64 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={xGData}>
                     <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1a" vertical={false} />
                     <XAxis dataKey="min" stroke="#94a3b8" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                     <YAxis hide />
                     <Tooltip 
                        contentStyle={{backgroundColor: '#0d1f1a', border: '1px solid #ffffff1a', borderRadius: '8px'}}
                        itemStyle={{color: '#fff'}}
                     />
                     <Line type="monotone" dataKey="home" stroke="#00e578" strokeWidth={3} dot={{r: 4, fill: '#00e578'}} activeDot={{r: 6}} />
                     <Line type="monotone" dataKey="away" stroke="#64748b" strokeWidth={2} dot={false} />
                  </LineChart>
               </ResponsiveContainer>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
             {[
               { label: 'GOLES ESP. (xG)', val1: '1.84', val2: '0.92', trend: '+0.52 xG últ. 15m', icon: Target, color: 'text-app-accent' },
               { label: 'ASIST. ESP. (xA)', val1: '1.15', val2: '0.45', trend: 'Fuerte flujo creativo', icon: Wind, color: 'text-app-accent' },
               { label: 'PÉRDIDAS ALTAS', val1: '8', val2: '3', trend: 'Presión Intensa', icon: Zap, color: 'text-white' },
               { label: 'PASES PROG.', val1: '42', val2: '28', trend: '+12 Verticalidad', icon: RefreshCw, color: 'text-app-accent' },
             ].map((stat, idx) => (
                <div key={idx} className="bg-app-surface rounded-xl p-4 border border-app-border relative overflow-hidden group">
                   <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold text-app-textMuted tracking-wider uppercase">{stat.label}</span>
                      <stat.icon className={`w-4 h-4 ${stat.color} opacity-50`} />
                   </div>
                   <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-2xl font-bold text-white">{stat.val1}</span>
                      <span className="text-app-textMuted">-</span>
                      <span className="text-xl font-medium text-app-textMuted">{stat.val2}</span>
                   </div>
                   <div className={`text-[10px] flex items-center ${stat.color}`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.trend}
                   </div>
                </div>
             ))}
          </div>

          {/* Possession Analysis */}
          <div className="bg-app-surface rounded-2xl p-6 border border-app-border">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-bold text-white">Análisis de Posesión y Territorio</h3>
                <span className="text-xs text-app-textMuted">Última act.: hace 10s</span>
             </div>
             
             <div className="space-y-6">
                {[
                  { label: 'POSESIÓN', val1: '58%', val2: '42%', w1: '58%' },
                  { label: 'INCLINACIÓN CAMPO (3er TERCIO)', val1: '71%', val2: '29%', w1: '71%' },
                  { label: 'PRECISIÓN DE PASES', val1: '84%', val2: '76%', w1: '84%' },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs font-bold text-app-textMuted mb-2 uppercase">
                       <span>{row.label}</span>
                       <span>{row.val1} - {row.val2}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex">
                       <div style={{width: row.w1}} className="h-full bg-app-accent"></div>
                       <div className="flex-1 h-full bg-white/10"></div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Right Col: Insights & Odds (4 cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
           
           {/* AI Insights Panel */}
           <div className="bg-app-surfaceLight rounded-2xl p-6 border border-app-border">
              <div className="flex items-center space-x-2 mb-6">
                 <Zap className="w-5 h-5 text-app-accent" />
                 <h3 className="font-bold text-white">Insights IA en Vivo</h3>
              </div>

              <div className="space-y-4">
                 <div className="bg-app-surface/50 border border-green-500/20 p-4 rounded-xl">
                    <div className="flex items-center text-app-accent text-xs font-bold mb-2">
                       <AlertCircle className="w-3 h-3 mr-2" /> Alerta de Valor
                    </div>
                    <p className="text-sm text-app-textMuted leading-relaxed">
                       River Plate rindiendo bajo xG por 0.84. Entrada "Próximo Gol" recomendada a cuota >1.90.
                    </p>
                 </div>

                 <div className="bg-app-surface/50 border border-app-border p-4 rounded-xl">
                    <div className="flex items-center text-white text-xs font-bold mb-2">
                       <Info className="w-3 h-3 mr-2" /> Cambio de Inercia
                    </div>
                    <p className="text-sm text-app-textMuted leading-relaxed">
                       La velocidad de transición de Boca disminuyó un 14% desde el minuto 55.
                    </p>
                 </div>

                 <div className="bg-app-surface/50 border border-app-border p-4 rounded-xl">
                    <div className="flex items-center text-white text-xs font-bold mb-2">
                       <Target className="w-3 h-3 mr-2" /> Amenaza Balón Parado
                    </div>
                    <p className="text-sm text-app-textMuted leading-relaxed">
                       River ganó 4 córners en los últimos 10m. El xG acumulado en balón parado está subiendo.
                    </p>
                 </div>
              </div>

              <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 border border-app-border text-xs font-bold text-white rounded-lg uppercase tracking-wider transition-colors">
                 Ver Registro Detallado
              </button>
           </div>

           {/* Contextual Markets */}
           <div className="bg-app-surface rounded-2xl p-6 border border-app-border">
              <h3 className="text-sm font-bold text-white mb-4">Mercados Contextuales</h3>
              
              <div className="mb-6">
                 <div className="text-xs text-app-textMuted font-bold mb-2">GANADOR (1X2)</div>
                 <div className="grid grid-cols-3 gap-2">
                    <button className="bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-app-border text-center transition-colors">
                       <div className="text-[10px] text-app-textMuted mb-1">RIV</div>
                       <div className="text-white font-bold">1.45</div>
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-app-border text-center transition-colors">
                       <div className="text-[10px] text-app-textMuted mb-1">EMPATE</div>
                       <div className="text-white font-bold">3.20</div>
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-app-border text-center transition-colors">
                       <div className="text-[10px] text-app-textMuted mb-1">BOC</div>
                       <div className="text-white font-bold">8.50</div>
                    </button>
                 </div>
              </div>

              <div className="mb-6">
                 <div className="text-xs text-app-textMuted font-bold mb-2">PRÓXIMO GOL (GOL 2)</div>
                 <div className="grid grid-cols-3 gap-2">
                    <button className="bg-app-accent/10 border border-app-accent p-3 rounded-lg text-center transition-colors">
                       <div className="text-[10px] text-app-accent mb-1">RIV</div>
                       <div className="text-app-accent font-bold">1.95</div>
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-app-border text-center transition-colors">
                       <div className="text-[10px] text-app-textMuted mb-1">NINGUNO</div>
                       <div className="text-white font-bold">2.40</div>
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-app-border text-center transition-colors">
                       <div className="text-[10px] text-app-textMuted mb-1">BOC</div>
                       <div className="text-white font-bold">4.80</div>
                    </button>
                 </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-app-border">
                  <div className="flex items-center text-app-accent font-bold text-xs mb-2">
                     <Zap className="w-3 h-3 mr-2" /> Sugerencia Apuesta Inteligente
                  </div>
                  <p className="text-xs text-app-textMuted">
                     Basado en la inclinación de campo actual (71%), River Plate más de 1.5 goles tiene 68% de probabilidad.
                  </p>
              </div>

           </div>

        </div>
      </div>
    </div>
  );
};

export default LiveMatchView;