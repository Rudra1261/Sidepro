import React from 'react'
import { Grid, Typography, Paper } from "@mui/material";
import RadarChart from "../Graphs/RadarChart";
import LineChart from "../Graphs/LineChart";
import { Timeline } from "@mui/icons-material";
import ProfileIntro from "../ProfileIntro";
import { Circle } from "@mui/icons-material";
import StackedBarChart from "../Graphs/StackedBarChart";
import SelectComponent from "../Select Component/SelectComponent";
import LineChartLayout from "./LineChartLayout";
const RadarChartLayout = () => {
  return (
    <div>
    <Paper
      elevation={3}
      sx={{ height: "55vh" }}
      style={{
        background: "#F5F5F5",
        borderRadius: "5%",
        boxShadow:
          "inset 3px 3px 6px #00000029, 3px 3px 6px #FFFFFF29",
      }}
    >
      <Grid item container sx={{ paddingTop: 5, paddingLeft: 3 }}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">
            Net profit margin
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">
            Started Collecting data from Feb 2019
          </Typography>
        </Grid>
        <Grid item xs={0.5} />
        <Grid item xs={1.5}>
          <Circle
            style={{
              paddingTop: 7,
              maxHeight: 25,
              maxWidth: 20,
              color: "#964DF7",
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="caption">
            <b>Sales</b>
          </Typography>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={0.5} />
        <Grid item xs={1.5}>
          <Circle
            style={{
              paddingTop: 7,
              maxHeight: 25,
              maxWidth: 20,
              color: "#19d895",
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption">
            <b>Orders</b>
          </Typography>
        </Grid>
      </Grid>
      <div style={{ paddingTop: "2.5rem" }}>
        <RadarChart />
      </div>
    </Paper>
  </div>
  )
}

export default RadarChartLayout