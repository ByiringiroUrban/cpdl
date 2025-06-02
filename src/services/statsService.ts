
const API_BASE_URL = 'http://localhost:3000';

export interface StatsData {
  visitors: number;
  donations: {
    total: number;
    monthly: number;
    currency: string;
  };
  recentActivities: Array<{
    id: string;
    type: 'donation' | 'report' | 'visitor';
    description: string;
    timestamp: string;
    amount?: number;
  }>;
}

export const fetchStats = async (): Promise<StatsData> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stats`);
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching stats:', error);
    // Return fallback data in case of error
    return {
      visitors: 12420,
      donations: {
        total: 45680,
        monthly: 12300,
        currency: 'CAD'
      },
      recentActivities: [
        {
          id: '1',
          type: 'donation',
          description: 'New donation received',
          timestamp: new Date().toISOString(),
          amount: 500
        },
        {
          id: '2',
          type: 'report',
          description: 'Monthly report uploaded',
          timestamp: new Date(Date.now() - 3600000).toISOString()
        }
      ]
    };
  }
};
