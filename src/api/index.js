import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changableURL = url;

  if (country) {
    changableURL = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(changableURL);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const getCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);

    return countries;
  } catch (error) {
    console.error(error);
  }
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = await data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    return modifiedData;
  } catch (error) {
    console.error(error);
  }
};
