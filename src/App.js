import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Day from "./Day";
import { useState, useEffect } from "react";
import { getWeather } from "./getWeather";

function App() {
  const [days, setDays] = useState([]);

  const updateWeather = async () => {
    const day = await getWeather();
    setDays(day);
  };
  useEffect(() => {
    updateWeather();
  }, []);
  return (
    <div className="App">
      <Container>
        <Grid container spacing={0.5}  alignItems="center" sx={{minHeight: '100vh'}}>
          {days.map((day) => (
            <Grid item xs='2' sx={{maxWidth: '10rem'}}>
            <Day
              key={day.dt}
              high={day.tempMax}
              low={day.tempMin}
              dayTitle={day.dt}
              icon={day.icon}
              description={day.description}
            />
            </Grid>
          ))}
        </Grid>
        </Container>
    </div>
  );
}

export default App;
