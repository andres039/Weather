import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const Day = ({ low, high, dayTitle, icon, index }) => {
const [color, setColor] = useState(index === 0 ? '#dbd7d2' : '')
  return (
    <Card sx={{ minHeight: 200, maxWidth: 170, backgroundColor: color }} >
      <CardContent>
        <Typography sx={{ fontSize: 24, fontWeight: 800 }}>
          {dayTitle}
          <br />
        </Typography>
        <Typography variant="body2">
          <Box>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
          </Box>
          <br />
        </Typography>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} direction="row" justifyContent="center">
          <Grid item xs={6}>
          <Typography variant="body2" sx={{fontWeight: 600, fontSize: 20}}>
           {low}
            <br />
          </Typography>
          </Grid>
          <Grid item xs={6}>
          <Typography  sx={{fontWeight: 600, fontSize: 20, color: 'gray'}}>
            {high}
            <br />
          </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Day;
