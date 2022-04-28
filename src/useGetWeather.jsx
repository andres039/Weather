import { useState, useEffect } from "react";

const useGetWeather = () => {
  const [days, setDays] = useState();

  useEffect(() => {
    const callData = async () => {
      const data = await fetch(process.env.REACT_APP_API_URL);
      const response = await data.json();
      const daily = response.daily.filter((day, index) => index < 4);
      const dailyRequiredData = daily.reduce((acc, cv) => {
        const obj = {
          dt: cv.dt,
          tempMin: cv.temp.min,
          tempMax: cv.temp.max,
          icon: cv.weather[0].icon,
        };

        acc.push(obj);

        return acc;
      }, []);

      console.log("url", dailyRequiredData);
      return dailyRequiredData;
    };

    setDays(callData());
  }, []);

  return { days };
};

export default useGetWeather;

//fetches from the URL and returns an object with temp(min-max), dt and icon
//Console.log that object for now
