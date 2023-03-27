import { height } from "@mui/system";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

function AuthenticBar() {
  const special = [
    "Experienced Dermatologist",
    "Advance technology",
    "Personalized treatment",
    "12+ Years Experiences",
  ];
  return (
    <div className="infobar">
      {special.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <VerifiedIcon sx={{ color: "#74777A" }} />
            <span className="authenticStyle">{item}</span>
          </div>
        );
      })}
    </div>
  );
}

export default AuthenticBar;
