export const getWeather = async () => {
  const data = await fetch(process.env.REACT_APP_API_URL);
      const response = await data.json();
      const daily = response.daily.filter((day, index) => index < 5);
      const dailyRequiredData = daily.reduce((acc, cv, index) => {
        
        const day = new Date(cv.dt * 1000);
        const options = {weekday: 'short'}
        const dayName = new Intl.DateTimeFormat('en-US', options).format(day)
        console.log(dayName)
        const obj = {
          index,
          dt: dayName,
          tempMin: (cv.temp.min).toFixed() + 'º',
          tempMax: cv.temp.max.toFixed() + 'º',
          icon: cv.weather[0].icon,
          description: cv.weather[0].description
        };

        acc.push(obj);

        return acc;
      }, []);

      
      return dailyRequiredData;
}




