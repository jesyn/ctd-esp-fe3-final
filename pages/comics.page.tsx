import { Container } from "@mui/material";
import { IComic } from "contracts/comics.contract";
import ComicDetail from "dh-marvel/components/comic/ComicDetail";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { GetServerSideProps } from "next";
import React from "react";

interface PropsComic {
  comic: IComic;
}

const comicsPage = (/* { comic }: PropsComic */) => {
  const handleClick = () => {
    console.log("compra realizda");
  };
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "30px",
      }}
    >
      <ComicDetail /* comic={comic} */ onBuyClick={handleClick} />
    </Container>
  );
};

/* export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const comic = await getComic(1011334);

  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate");

  return {
    props: {
      comic,
    },
  };
}; */

export default comicsPage;
