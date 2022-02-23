import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import RadarChart from "../Graphs/RadarChart";
import LineChart from "../Graphs/LineChart";
import { Timeline } from "@mui/icons-material";
import ProfileIntro from "../ProfileIntro";
import { Circle } from "@mui/icons-material";
import StackedBarChart from "../Graphs/StackedBarChart";
import SelectComponent from "../Select Component/SelectComponent";
import LineChartLayout from "./LineChartLayout";
import RadarChartLayout from "./RadarChartLayout";
import StackedBarLayout from "./StackedBarLayout";
const Layout = () => {
  return (
    <>
      <Grid container sx={{ marginTop: 5 }}>
        <Grid item xs={1} />
        <Grid item container xs={10}>
          <ProfileIntro />
          <Grid item container sx={{ marginTop: 5 }}>
            <Grid item xs={7}>
              <LineChartLayout />
            </Grid>
            <Grid item xs={0.5} />
            <Grid item xs={4.5}>
              <RadarChartLayout />
            </Grid>
          </Grid>
          <Grid item container sx={{ marginTop: 5, paddingBottom: 5 }}>
            <Grid item xs={8.5}>
              <StackedBarLayout />
            </Grid>
            <Grid item xs={0.5} />
            <Grid item xs={3}>
              <RadarChartLayout />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </>
  );
};

export default Layout;
