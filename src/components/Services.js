import React from "react";
import { Card, CardHeader, Divider } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import baby from "../photos/baby.jpg";
import beauty from "../photos/beauty.jpg";
import hair from "../photos/hair.jpg";

function Services() {
  const allServices = [
    {
      imageLink: beauty,
      serviceTitle: "Skin Treatment",
      serviceDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit sed mauris euismod aliquam. Aenean augue velit, iaculis id ligula a, pretium rhoncus mauris.",
    },
    {
      imageLink: baby,
      serviceTitle: "Paediatics Treatment",
      serviceDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit sed mauris euismod aliquam. Aenean augue velit, iaculis id ligula a, pretium rhoncus mauris.",
    },
    {
      imageLink: hair,
      serviceTitle: "Hair Treatment",
      serviceDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis elit sed mauris euismod aliquam. Aenean augue velit, iaculis id ligula a, pretium rhoncus mauris.",
    },
  ];
  return (
    <>
      <div className="docServicesText">
        <h2
          style={{ textAlign: "center", fontWeight: "400", margin: "2px 0px" }}
        >
          Treatments
        </h2>
        <h1
          style={{ textAlign: "center", fontWeight: "500", margin: "2px 0px" }}
        >
          What can we do for you
        </h1>
        <Divider
          sx={{
            width: "15%",
            margin: "10px auto",
            border: "2px solid black",
            borderRadius: "50%",
            "@media (max-width: 990px)": {
              width: "55%",
            },
          }}
        />
      </div>
      <div className="docServicesContent">
        {allServices.map((service, index) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                margin: "0px 10px",
                borderRadius: "9px",
                "@media (max-width: 990px)": {
                  width: "100%",
                  margin:"10px 0px"
                },
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  width="200"
                  image={service.imageLink}
                  alt="hahaha"
                  sx={{
                    "@media (max-width: 990px)": {
                        height:"100"
                      },
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {service.serviceTitle}
                  </Typography>
                  <Divider
                    sx={{
                      width: "50%",
                      margin: "10px auto",
                      border: "2px solid black",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {service.serviceDesc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Services;
