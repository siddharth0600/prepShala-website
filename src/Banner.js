import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Get the App Now!</h1>
        {/* <h5>Your Friend to Success </h5> */}

        <Button variant="outlined">
          <a href="https://drive.google.com/drive/folders/1Y5PXpW8ZQEvxCIMSUzvvhrdCd5nsfx4o?usp=sharing">
            Download Pro-Version
          </a>
        </Button>
        <Button variant="outlined">
          <a href="https://drive.google.com/drive/folders/1LUK7nxlcJL2_eqGHeJ84adhxY2fRrOC3?usp=sharing">
            Download Lite-Version
          </a>
        </Button>
      </div>
    </div>
  );
}

export default Banner;
