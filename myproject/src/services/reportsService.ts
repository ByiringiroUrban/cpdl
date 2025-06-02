import axios from 'axios';

// API base URL - adapt if needed based on your environment
const API_URL = 'http://localhost:5000/api';

export interface Report {
  _id?: string;
  title: string;
  content: string;
  createdAt: string;
  fileUrl?: string;
  fileName?: string;
}

// Get all reports
export const fetchReports = async (): Promise<Report[]> => {
  try {
    const response = await axios.get(`${API_URL}/reports`);
    return response.data;
  } catch (error) {
    console.error('Error fetching reports:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch reports');
  }
};

// Delete a report
export const deleteReport = async (reportId: string): Promise<{ message: string }> => {
  try {
    const response = await axios.delete(`${API_URL}/reports/${reportId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Add if using auth
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting report:', error);
    throw new Error(
      error.response?.data?.message || 
      error.message || 
      'Failed to delete report'
    );
  }
};

// Create a new report with file
export const createReport = async (formData: FormData): Promise<Report> => {
  try {
    const response = await axios.post(`${API_URL}/reports`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Add if using auth
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating report:', error);
    throw new Error(
      error.response?.data?.message || 
      'Failed to create report. Please try again.'
    );
  }
};