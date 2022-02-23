import React from 'react'
import { Grid, Typography, Paper } from "@mui/material";
import RadarChart from "../Graphs/RadarChart";
import LineChart from "../Graphs/LineChart";
import { Timeline } from "@mui/icons-material";
import ProfileIntro from "../ProfileIntro";
import { Circle } from "@mui/icons-material";
import StackedBarChart from "../Graphs/StackedBarChart";
import SelectComponent from "../Select Component/SelectComponent";
const LineChartLayout = () => {
  return (
    <div>
    <Paper
      elevation={6}
      sx={{ height: "55vh" }}
      style={{
        background: "#F5F5F5",
        borderRadius: "5%",
        boxShadow:
          "inset 3px 3px 6px #00000029, 3px 3px 6px #FFFFFF29",
      }}
    >
      <Grid item container sx={{ paddingLeft: 3 }}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            <b>Sales Statistics Overview</b>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            Lorem Ipsum placeholder text
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Total cost
          </Typography>
          <Grid item container>
            <Grid item xs={3}>
              <Typography variant="h6">
                <b>15,263</b>
              </Typography>
            </Grid>
            <Grid item xs={1.5} />
            <Grid item xs={7.5}>
              <Typography variant="body2">
                <b>89.5%</b> of 20,000
              </Typography>
              <Typography variant="caption">Total</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={4}>
          <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
            Total Revenue
          </Typography>
          <Grid item container>
            <Grid item xs={3}>
              <Typography variant="h6">
                <b>17,193</b>
              </Typography>
            </Grid>
            <Grid item xs={1.5} />
            <Grid item xs={7.5}>
              <Typography variant="body2">
                <b>10.5%</b> of 20,000
              </Typography>
              <Typography variant="caption">Total</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            sx={{ textAlign: "center", marginTop: 4 }}
          >
            <Grid item xs={1} />
            <Grid item xs={5}>
              <Timeline
                style={{
                  color: "rgba(255, 99, 132, 0.5)",
                  maxWidth: 30,
                  maxHeight: 17,
                }}
              />
              <Typography variant="caption">Revenue</Typography>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={5}>
              <Timeline
                style={{
                  color: "rgba(53, 162, 235, 0.5)",
                  maxWidth: 30,
                  maxHeight: 17,
                }}
              />
              <Typography variant="caption">Sales</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div
        style={{ maxHeight: 350, paddingLeft: 25, paddingRight: 10 }}
      >
        <LineChart />
      </div>
    </Paper>
  </div>
  )
}

export default LineChartLayout