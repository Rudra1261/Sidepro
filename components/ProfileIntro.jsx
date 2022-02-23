import React from "react";
import { Grid, Typography, Paper, Button } from "@mui/material";
import dynamic from "next/dynamic";
const ReactSpeedometer = dynamic(() => import("react-d3-speedometer"), {
  ssr: false,
});
const ProfileIntro = () => {
  return (
    <>
      <Grid item container>
        <Grid item xs={8.5}>
          <Paper
            sx={{ minHeight: "29vh", minWidth: 350, background: "#7E7FFE" }}
            elevation={3}
          >
            <Grid item container sx={{ marginLeft: 3 }}>
              <Grid item xs={7}>
                <Typography variant="h6" color="white" sx={{ marginTop: 3 }}>
                  <b>Welcome back! Diane</b>
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ marginTop: 1.5 }}
                >
                  You have completed 60% of your goals this week!
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ marginTop: 0.5 }}
                >
                  Start a New Goal and imporve your results
                </Typography>
                <Button
                  variant="contained"
                  size="medium"
                  sx={{
                    marginTop: 3,
                    fontSize: "11px",
                    textAlign: "center",
                    background: "#C96CFD",
                  }}
                >
                  Learn more
                </Button>
              </Grid>
              {/* <Grid item xs={1}/> */}
              <Grid item xs={5}>
                <img
                  src="/images/illustration.svg"
                  style={{ maxHeight: "29vh", width: "35vw" }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={0.5} />
        <Grid item xs={3}>
          <Paper elevation={3} sx={{ minHeight: "29vh" }}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ paddingTop: 4 }}
            >
              <ReactSpeedometer
                value={67}
                segments={5}
                segmentColors={[
                  "#bf616a",
                  "#d08770",
                  "#ebcb8b",
                  "#a3be8c",
                  "#b48ead",
                ]}
                ringWidth={10}
                maxValue={100}
                minValue={0}
                maxSegmentLabels={5}
                width={150}
                height={150}
                needleColor="steelblue"
                needleHeightRatio={0.75}
                needleTransitionDuration={3000}
                needleTransition="easeBounceInOut"
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileIntro;

// <Grid item container sx={{ marginLeft: 3 }}>
//               <Grid item xs={7}>
//                 <Typography variant="h6" color="black" sx={{ marginTop: 2 }}>
//                   <b>32,541</b>
//                 </Typography>
//                 <Typography variant="body2" color="primary">
//                   <b>Visits</b>
//                 </Typography>
//                 <Typography variant="body2" color="black">
//                   +14(+0.50%)
//                 </Typography>
//                 <Typography variant="h6" color="black" sx={{ marginTop: 2 }}>
//                   <b>15,236</b>
//                 </Typography>
//                 <Typography variant="body2" color="primary">
//                   <b>Impressions</b>
//                 </Typography>
//                 <Typography variant="body2" color="black">
//                   +138.97(+0.54%)
//                 </Typography>
//               </Grid>
//               <Grid
//                 item
//                 xs={3}
//                 sx={{ marginTop: 3, paddingRight: 3 }}

//               >
//                 <img src="/images/g1.png" style={{maxWidth:"75px"}} />
//                 <img src="/images/g2.png" style={{ marginTop: "45px",maxWidth:"75px" }} />
//               </Grid>
//               <Grid item xs={2} />
//             </Grid>
