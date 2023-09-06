import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";

export interface PropsCard {
  id: number;
  name: string;
  image: string;
}

export const ComicCard = ({ id, name, image }: PropsCard) => {
  return (
    <>
      <Grid key={id} item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" alt={name} height="140" image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Button variant="outlined" size="small">
              Ver detalles
            </Button>
            <Button variant="contained" size="small">
              comprar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
