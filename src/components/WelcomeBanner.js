import React from "react";
import { Box } from "@mui/system";
import image1 from "../photos/image1.jpg";
import image2 from "../photos/image2.jpg";
import { Button } from "@mui/material";

function WelcomeBanner() {
  return (
    <>
      <Box sx={{ display: "flex", width: "100%", position: "relative" }}>
        <Box
          sx={{
            width: "50%",
            background: `url(${image1}) no-repeat center center`,
            backgroundSize: "cover",
            overflow: "hidden",
            height: "80vh",
            maxHeight: "600px",
            minHeight: "300px",
            "@media (max-width: 990px)": {
              width: "100%",
              height: "60vh",
            },
          }}
        ></Box>
        <Box
          sx={{
            width: "50%",
            background: `url(${image2}) no-repeat center center`,
            backgroundSize: "cover",
            overflow: "hidden",
            height: "80vh",
            maxHeight: "600px",
            minHeight: "300px",
            "@media (max-width: 990px)": {
              display: "none",
            },
          }}
        ></Box>

        <div className="description">
          <div>
            <h1 className="title">Skin & Scalp</h1>
            <h2 className="subtitle">Rejuvenation</h2>
            <p className="subtitle1">
              Giving fantastoc personalized dermatology cares for your skin and
              hair specific concerns
            </p>
          </div>
          <div>
            <p className="desc-button">
              <Button
                sx={{
                  width: "200px",
                  backgroundColor: "#1F3037",
                  size: "large",
                }}
                variant="contained"
              >
                Book Appointment
              </Button>
            </p>
          </div>
        </div>
      </Box>
    </>
  );
}

export default WelcomeBanner;
