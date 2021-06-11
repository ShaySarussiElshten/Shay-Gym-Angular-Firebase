export interface Exercise {
  id: string;
  name: string;
  duration: number;
  calories: number;
  date?: number;
  email?: string;
  state?: 'completed' | 'cancelled' | null;
}
