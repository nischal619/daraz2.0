import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { ShoppingCart } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon color="error" />
          </IconButton>
        }
        title="Dhara Health Sun Flower Oil 1L"
        subheader="Nimesh Kirana Store"
        titleTypographyProps={{ variant: "h6" }}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random"
        alt="Paella dish"
      />

      <CardActions disableSpacing>
        <Typography variant="h2" color="initial">
          Rs. 350.00
        </Typography>
        <IconButton aria-label="add to favorites">
          <ShoppingCart fontSize="large" color="primary" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
