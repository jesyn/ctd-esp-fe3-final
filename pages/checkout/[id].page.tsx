import React from "react";
import { GetStaticProps, NextPage } from "next";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import BuyingComicDetail from "dh-marvel/components/ComicCard/BuyingComicDetail";
import { useRouter } from "next/router";
import { IComic } from "contracts/comics.contract";
import { FormProvider, useForm } from "react-hook-form";
import { schema } from "./../../components/rules/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Forms from "dh-marvel/components/Form/Forms";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getComic, getComics } from "dh-marvel/services/marvel/marvel.service";
import { toFrontComic, toFrontComics } from "mappers/comic.mapper";

interface PropsCheckout {
  comic: IComic;
}

const CheckoutPage: NextPage<PropsCheckout> = ({ comic }) => {
  const router = useRouter();

  const handleClickGoBack = () => {
    router.back();
  };

  type DataForm = yup.InferType<typeof schema>;

  const methods = useForm<DataForm>({
    resolver: yupResolver(schema),
    defaultValues: {},
  });

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "30px",
      }}
    >
      <Paper
        elevation={1}
        sx={{
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <ArrowBackIcon
          fontSize="large"
          color="secondary"
          onClick={handleClickGoBack}
          sx={{
            cursor: "pointer",
            position: "absolute",
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        />
        <Typography variant="h4" align="center" mt={2}>
          Formulario de compra
        </Typography>
        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BuyingComicDetail comic={comic} />
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <FormProvider {...methods}>
              <Forms />
            </FormProvider>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = Number(params?.id);

  try {
    const comicApi = await getComic(id);
    const comic = toFrontComic(comicApi);

    return {
      props: {
        comic,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("No se pudo obtener el comic", error);
    return {
      props: {
        comic: {},
      },
    };
  }
};

export async function getStaticPaths() {
  const comicsApi = await getComics();
  const comics = toFrontComics(comicsApi.data);

  const paths = comics.comics.map((comic) => ({
    params: { id: comic.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export default CheckoutPage;
