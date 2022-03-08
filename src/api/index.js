import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(url);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate
    };

    console.log(modifiedData);

    return modifiedData;
  } catch (error) {
    console.error(error);
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

    // const modifiedData = {
    //   confirmed,
    //   recovered,
    //   deaths,
    //   lastUpdate
    // };

    console.log(data);

    // return modifiedData;
  } catch (error) {
    console.error(error);
  }
};
