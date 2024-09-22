import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p style={{ fontSize: '20px' }}>
        At My Restaurant's , we believe in offering more than just food—we provide an experience. Nestled in the heart of Noida Uttar Pradesh, our restaurant is a place where flavor and hospitality meet. Our chefs craft every dish with love and care, using the freshest ingredients sourced from local farms and markets. We take pride in celebrating seasonal flavors, ensuring that each meal is a reflection of our commitment to quality.
        </p>
        <br />
        <p style={{ fontSize: '20px' }}>
        Our menu features a diverse range of culinary delights, from classic favorites to innovative dishes that tantalize your taste buds. Whether you’re in the mood for a hearty meal, a light snack, or a decadent dessert, we have something to satisfy every craving.
        </p>
        <br/>
        <p style={{ fontSize: '20px' }}>
        But it’s not just about the food; it’s about the entire dining experience. Our warm and inviting atmosphere, paired with attentive service, creates the perfect backdrop for gatherings with family and friends. We are dedicated to making every visit special, whether it’s a casual lunch, a romantic dinner, or a festive celebration.
        </p>
        <br/>
        <p style={{ fontSize: '20px' }}>
        Join us for live music nights, seasonal events, and exclusive tasting menus that showcase our culinary creativity. At My Restaurant's, every dish tells a story, and we can’t wait to share it with you.
        </p>
        <br/>
        <p style={{ fontSize: '20px',color: 'red' ,textAlign:'center'}}>
        Welcome to our table, where every meal is a journey and every guest is family!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
