import React from "react";
import {
  Card,
  CardHeader,
  Divider,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import visitUs from "../photos/visitUs.jpg";
import PhoneIcon from "@mui/icons-material/Phone";

function AreaOfService() {
  const allClinics = [
    {
      visitTitle: "Kashvi Hospital",
      visitDesc:
        "85, Itedha Village, Near Ek Murti Chauraha, Noida Extension Greater Noida West, Noida",
      visitContact: "8512888065",
    },
    {
      visitTitle: "Dermalinks",
      visitDesc:
        "A-207 & 307, Rajhans Plaza, Opp. Aditya MallKala Pather Road,Ahinsa Khand-1, Indirapuram, Ghaziabad",
      visitContact: "8512888065",
    },
    {
      visitTitle: "Dermalinks",
      visitDesc:
        "A-401,402 La Gracia Mall, Above Vishal Mega Mart, Crossing Republik, Ghaziabad",
      visitContact: "8512888065",
    },
  ];
  return (
    <>
      <div className="docServicesText">
        <h2
          style={{ textAlign: "center", fontWeight: "400", margin: "2px 0px" }}
        >
          Visit Us
        </h2>
        <h1
          style={{ textAlign: "center", fontWeight: "500", margin: "2px 0px" }}
        >
          Where can you find us
        </h1>
        <Divider
          sx={{
            width: "15%",
            margin: "10px auto",
            border: "2px solid black",
            borderRadius: "50%",
            "@media (max-width: 990px)": {
              width:"55%"
            },
          }}
        />
      </div>
      <Box
        sx={{
          background: `url(${visitUs}) no-repeat center center`,
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "right",
          overflow: "hidden",
          height: "600px",
          backgroundPositionX: "300px",
          backgroundPositionY: "-300px",
          "@media (max-width: 990px)": {
            backgroundPositionX: "0px",
          backgroundPositionY: "0px",
          },

        }}
      >
        {allClinics.map((visit, index) => {
          return (
            <Card
              sx={{
                maxWidth: 300,
                margin: "15px 0px 5px 150px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "9px",
                "@media (max-width: 990px)": {
                  margin: "10px 0px 10px 15px",
                  maxWidth:260
                },
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {visit.visitTitle}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  {visit.visitDesc}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button size="small">Reach Now</Button>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <PhoneIcon />
                  <p style={{ cursor: "pointer", margin: "0px" }}>
                    +91{visit.visitContact}
                  </p>
                </span>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </>
  );
}

export default AreaOfService;
