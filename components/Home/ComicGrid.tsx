import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import { ComicCard, PropsCard } from "./ComicCard";
import Image from "next/image";

interface PropsGrid {
  comics: PropsCard[];
}

const ComicGrid = ({ comics }: PropsGrid) => {
  return (
    <Container sx={{ paddingTop: "20px", paddingBottom: "30px" }}>
      {/*  <Image
        src="/fondo-comics2.jpg"
        alt="fondo de comics"
        layout="fill"
        style={{ position: "absolute", top: "50px", bottom: "50px" }}
      /> */}
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {comics && comics.map((comic) => <ComicCard key={comic.id} id={comic.id} name={comic.name} image={comic.image} />)}
      </Grid>
    </Container>
  );
};

export default ComicGrid;
