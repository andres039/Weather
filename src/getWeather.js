export const getWeather = async () => {
  const data = await fetch(process.env.REACT_APP_API_URL);
      const response = await data.json();
      const daily = response.daily.filter((day, index) => index < 4);
      const dailyRequiredData = daily.reduce((acc, cv) => {
        
        const day = new Date(cv.dt * 1000);
        const options = {weekday: 'short'}
        const dayName = new Intl.DateTimeFormat('en-US', options).format(day)
        console.log(dayName)
        const obj = {
          dt: dayName,
          tempMin: cv.temp.min,
          tempMax: cv.temp.max,
          icon: cv.weather[0].icon,
          description: cv.weather[0].description
        };

        acc.push(obj);

        return acc;
      }, []);

      console.log("url", dailyRequiredData);
      return dailyRequiredData;
}
