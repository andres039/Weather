import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const Day = ({low, high, description, dayTitle, icon}) => {

  return (
    <Card sx={{ minHeight: 200 }} variant="outlined">
    <CardContent>
    <Typography variant="body2">
        {dayTitle}
        <br />
        
      </Typography>
      <Typography variant="body2">
        {icon}
        <br />
        
      </Typography>
      <Typography variant="body2">
        Description: {description}
        <br />
      </Typography>
      <Typography variant="body2">
        High: {high}
        <br />
        
      </Typography>
      <Typography variant="body2">
        Low: {low}
        <br />
      </Typography>
    </CardContent>
    </Card>
    
  )
}

export default Day
