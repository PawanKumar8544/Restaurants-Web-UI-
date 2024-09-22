import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    
    <Layout>
      <h1 style={{ textAlign:'center', marginTop:'15px' } }>MENU</h1>


      <h3 style={{marginTop: '20px', textAlign:'center', margin:'20px'}}>Our a la carte menu available for lunch and dinner features signature dishes which are a unique marriage of global ingredients and techniques with the flavours and traditions of India. The six course Chef's Tasting menu where each course is paired with a selection of wines from India and across the world, offers the complete dining experience of the restaurant.</h3>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
