import axios from 'axios';

console.log(URL);

export const fetchData = async () => {
  try {
    const response = await axios.get(URL);
    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
  }
};
