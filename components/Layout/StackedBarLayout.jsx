import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import RadarChart from "../Graphs/RadarChart";
import LineChart from "../Graphs/LineChart";
import { Timeline } from "@mui/icons-material";
import ProfileIntro from "../ProfileIntro";
import { Circle } from "@mui/icons-material";
import StackedBarChart from "../Graphs/StackedBarChart";
import SelectComponent from "../Select Component/SelectComponent";
const StackedBarLayout = () => {
  return (
    <div>
        <Paper
          elevation={3}
          sx={{ height: "45vh" }}
          style={{
            background: "#F5F5F5",
            borderRadius: "5%",
            boxShadow: "inset 3px 3px 6px #00000029, 3px 3px 6px #FFFFFF29",
          }}
        >
          <Grid item container sx={{ paddingLeft: 3 }}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ marginTop: 3 }}>
                <b>Market Overview Overview</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2">
                Lorem Ipsum placeholder text
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ textAlign: "center" }}>
              <Typography variant="h4" sx={{ paddingTop: 3 }}>
                <b>$36,750</b>
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ textAlign: "center" }}>
              <Typography variant="subtitle2" sx={{ paddingTop: 3 }}>
                USD
              </Typography>
            </Grid>
            <Grid item xs={1} sx={{ textAlign: "center" }}>
              <Typography
                variant="subtitle2"
                sx={{ paddingTop: 3 }}
                color="green"
              >
                <b>(+ 1.37%)</b>
              </Typography>
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={2} />
            <Grid item xs={3}>
              <SelectComponent />
            </Grid>
          </Grid>
          <div style={{ maxHeight: 400, paddingLeft: 25, paddingRight: 10 }}>
            <StackedBarChart />
          </div>
        </Paper>
    </div>
  );
};

export default StackedBarLayout;
