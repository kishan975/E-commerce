import React from "react";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div className="bg-black text-white mt-10">

      {/* 🔝 TOP SECTION */}
      <Grid
        container
        spacing={4}
        justifyContent="space-evenly" // ✅ equal spacing
        alignItems="flex-start"
        sx={{
          py: 6,
          px: 4,
          textAlign: "center",
          maxWidth: "550px",
          margin: "auto",
        }}
      >
        {/* Company */}
        <Grid item xs={6} sm={4} md="auto">
          <Typography variant="h6" gutterBottom>Company</Typography>
          <div className="flex flex-col items-center gap-2">
            <span>About</span>
            <span>Blog</span>
            <span>Press</span>
            <span>Jobs</span>
            <span>Partners</span>
          </div>
        </Grid>

        {/* Solutions */}
        <Grid item xs={6} sm={4} md="auto">
          <Typography variant="h6" gutterBottom>Solutions</Typography>
          <div className="flex flex-col items-center gap-2">
            <span>Marketing</span>
            <span>Analytics</span>
            <span>Commerce</span>
            <span>Insights</span>
            <span>Support</span>
          </div>
        </Grid>

        {/* Documentation */}
        <Grid item xs={6} sm={4} md="auto">
          <Typography variant="h6" gutterBottom>Documentation</Typography>
          <div className="flex flex-col items-center gap-2">
            <span>Guides</span>
            <span>API Status</span>
          </div>
        </Grid>

        {/* Legal */}
        <Grid item xs={6} sm={4} md="auto">
          <Typography variant="h6" gutterBottom>Legal</Typography>
          <div className="flex flex-col items-center gap-2">
            <span>Claim</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </Grid>
      </Grid>

      {/* 🔻 BOTTOM SECTION */}
      <div className="border-t border-gray-700 text-center py-4">
        <Typography variant="body2">
          © 2026 All rights reserved.
        </Typography>

        <Typography variant="body2">
          Made with love by Kishan & Team.
        </Typography>

        <Typography variant="body2">
          Icons made by{" "}
          <a
            href="https://www.freepik.com"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Freepik
          </a>{" "}
          from{" "}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            flaticon.com
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;