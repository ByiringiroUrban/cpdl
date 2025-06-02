
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export interface Donation {
  _id?: string;
  type: 'financial' | 'other';
  amount?: number;
  donorName: string;
  description?: string;
  donationType?: string;
  createdAt: string;
}

export interface Stats {
  totalDonations: number;
  previousMonthDonations: number;
  monthlyGrowth: number;
  visitors: number;
  previousWeekVisitors: number;
  weeklyGrowth: number;
}

export const fetchDonations = async (): Promise<Donation[]> => {
  const response = await axios.get(`${API_URL}/donations`);
  return response.data;
};

export const createDonation = async (donationData: Partial<Donation>): Promise<Donation> => {
  const response = await axios.post(`${API_URL}/donations`, donationData);
  return response.data;
};

export const fetchStats = async (): Promise<Stats> => {
  const response = await axios.get(`${API_URL}/stats`);
  return response.data;
};

export const incrementVisitor = async (): Promise<Stats> => {
  const response = await axios.post(`${API_URL}/stats/visitor`);
  return response.data;
};
