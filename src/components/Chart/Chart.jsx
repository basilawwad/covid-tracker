import { useState, useEffect } from 'react';
import { getDailyData } from '../../api';

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    async function fetchMyAPI() {
      const fetchData = await getDailyData();

      setDailyData(fetchData);
    }

    fetchMyAPI();

    console.log(dailyData);
  });
  return <h2>Chart</h2>;
};

export default Chart;
