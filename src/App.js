import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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
      <Container fixed sx={{width: '55vw'}}>
      <Typography variant="h5">
        <h1> A five day Weather Forecast for Ottawa</h1>
        </Typography>
        <Grid container columns={10} rowSpacing={1}  alignItems="center" sx={{maxHeight: '100vh', maxWidth: '100%', marginTop: '10rem'}}>
          {days.map((day) => (
            <Grid item  xs={10} md={2} >
            <Day
              key={day.dt}
              high={day.tempMax}
              low={day.tempMin}
              dayTitle={day.dt}
              icon={day.icon}
              description={day.description}
              index={day.index}
            />
            </Grid>
          ))}
        </Grid>
        </Container>
    </div>
  );
}

export default App;
