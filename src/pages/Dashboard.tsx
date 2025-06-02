
import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Download, Trash2, Plus, Calendar } from 'lucide-react';
import { fetchReports, deleteReport } from '@/services/reportsService';
import { fetchDonations } from '@/services/donationsService';
import { toast } from 'sonner';
import DashboardStats from '@/components/DashboardStats';
import RecentActivities from '@/components/RecentActivities';

const Dashboard = () => {
  const queryClient = useQueryClient();

  const { data: reports, isLoading: reportsLoading } = useQuery({
    queryKey: ['reports'],
    queryFn: fetchReports,
  });

  const { data: donations, isLoading: donationsLoading } = useQuery({
    queryKey: ['donations'],
    queryFn: fetchDonations,
  });

  const deleteReportMutation = useMutation({
    mutationFn: deleteReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reports'] });
      queryClient.invalidateQueries({ queryKey: ['dashboard-stats'] });
      toast.success('Report deleted successfully');
    },
    onError: (error) => {
      console.error('Error deleting report:', error);
      toast.error('Failed to delete report');
    },
  });

  const handleDeleteReport = (reportId: string) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      deleteReportMutation.mutate(reportId);
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Report
          </Button>
          <Button>
            <Calendar className="h-4 w-4 mr-2" />
            Schedule
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-4">
        {/* Recent Activities */}
        <RecentActivities />

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              New Report
            </Button>
            <Button className="w-full" variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button className="w-full" variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Add Donation
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Data Tables */}
      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports">Reports Management</TabsTrigger>
          <TabsTrigger value="donations">Donations Overview</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Input placeholder="Search reports..." className="max-w-sm" />
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Report
                </Button>
              </div>
              
              {reportsLoading ? (
                <div className="text-center py-4">Loading reports...</div>
              ) : (
                <div className="space-y-2">
                  {reports?.map((report) => (
                    <div key={report._id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium">{report.filename}</p>
                          <p className="text-sm text-gray-500">
                            Uploaded: {new Date(report.uploadDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{report.category}</Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`http://localhost:3000/api/reports/download/${report._id}`, '_blank')}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteReport(report._id)}
                          disabled={deleteReportMutation.isPending}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  {(!reports || reports.length === 0) && (
                    <div className="text-center py-8 text-gray-500">
                      No reports found. Upload your first report to get started.
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Donations Overview</CardTitle>
            </CardHeader>
            <CardContent>
              {donationsLoading ? (
                <div className="text-center py-4">Loading donations...</div>
              ) : (
                <div className="space-y-2">
                  {donations?.map((donation) => (
                    <div key={donation._id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">{donation.donorName}</p>
                        <p className="text-sm text-gray-500">{donation.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-green-600">
                          ${donation.amount} {donation.currency}
                        </p>
                        <p className="text-sm text-gray-500">
                          {new Date(donation.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  {(!donations || donations.length === 0) && (
                    <div className="text-center py-8 text-gray-500">
                      No donations found.
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
