// src/Dashboard.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Hardcoded data for the dashboard
  const userEnrolled = 500;
  const totalVolume = 12000;
  const jobAbends = 5;

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Enrolled',
        data: [50, 100, 200, 150, 250, 300],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Total Volume',
        data: [2000, 2200, 1800, 2500, 2400, 2300, 2100],
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  return (
    <Grid container spacing={3} style={{ padding: 20 }}>
      {/* User Enrolled */}
      <Grid item xs={12} sm={4}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h5" component="h2">
            User Enrolled
          </Typography>
          <Typography variant="h3">{userEnrolled}</Typography>
        </Paper>
      </Grid>

      {/* Total Volume */}
      <Grid item xs={12} sm={4}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h5" component="h2">
            Total Volume
          </Typography>
          <Typography variant="h3">{totalVolume}</Typography>
        </Paper>
      </Grid>

      {/* Job Abends */}
      <Grid item xs={12} sm={4}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h5" component="h2">
            Job Abends
          </Typography>
          <Typography variant="h3">{jobAbends}</Typography>
        </Paper>
      </Grid>

      {/* Bar Chart */}
      <Grid item xs={12} sm={6}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h6" component="h4">
            User Enrolled Over Time
          </Typography>
          <Bar data={barData} />
        </Paper>
      </Grid>

      {/* Line Chart */}
      <Grid item xs={12} sm={6}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h6" component="h4">
            Total Volume Over the Week
          </Typography>
          <Line data={lineData} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
