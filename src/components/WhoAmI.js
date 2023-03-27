import { Button } from "@mui/material";
import React from "react";
import docpic from "../photos/docpic.webp";

function WhoAmI() {
  return (
    <div className="docdescription">
      <div className="docImage">
        <img src={docpic}></img>
      </div>
      <div className="docContent">
        <h1 style={{margin:"2px 0px"}}>Dr Vidushi Jain</h1>
        <h4 style={{margin:"0px"}}>Consultant Dermatologist, Cosmetologist & Laser Expert</h4>
        <p style={{margin:"0px",color:"#277B9D"}}>MBBS, MD(Skin & VD)</p>
        <p className="docSumm">
          Dr. Vidushi Jain is the Co-Founder and currently heads the Institute
          of Dermatology & Skin Diseases at Shashi Wellness Clinic. She has
          achieved University gold medal for ENT in year 2009 and University
          gold medal for M.D. in year 2014.
        </p>
        <p>
          A crucial element of her success is the hands-on attention he devotes
          to each patient, spending significant amounts of time talking with
          each person to understand their goals and needs.
        </p>
        <Button
          sx={{  size: "small",width:"150px",backgroundColor:"#1F3037"}}
          variant="contained"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default WhoAmI;
