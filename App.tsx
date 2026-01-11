import React, { useState } from 'react';
import Layout from './components/Layout';
import LiveMatchView from './components/LiveMatchView';
import ValueExplorerView from './components/ValueExplorerView';
import PerformanceView from './components/PerformanceView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.LIVE_ANALYSIS);

  const renderView = () => {
    switch (currentView) {
      case ViewState.LIVE_ANALYSIS:
        return <LiveMatchView />;
      case ViewState.VALUE_EXPLORER:
        return <ValueExplorerView />;
      case ViewState.BANKROLL_HEALTH:
        return <PerformanceView />;
      default:
        return <LiveMatchView />;
    }
  };

  return (
    <Layout currentView={currentView} setCurrentView={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;