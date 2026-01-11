export enum ViewState {
  LIVE_ANALYSIS = 'LIVE_ANALYSIS',
  VALUE_EXPLORER = 'VALUE_EXPLORER',
  BANKROLL_HEALTH = 'BANKROLL_HEALTH',
}

export interface MatchData {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  time: string;
  league: string;
  xgHome: number;
  xgAway: number;
}

export interface BetValue {
  match: string;
  prediction: string;
  bookieOdds: number;
  aiProb: number;
  ev: number;
  league: string;
  date: string;
}