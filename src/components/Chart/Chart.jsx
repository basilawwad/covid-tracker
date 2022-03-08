import { useState, useEffect } from 'react';
import { getDailyData } from '../../api';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import styles from './Charts.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      setDailyData(await getDailyData());
    };

    fetchMyAPI();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            backgroundColor: 'blue',
            fill: true,
            tension: 0.1
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 2.5)',
            fill: true,
            tension: 0.1
          }
        ]
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
