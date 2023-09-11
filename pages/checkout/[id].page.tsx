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

  console.log({ comic });

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
        sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
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
        <Typography variant="h4" align="center">
          Formulario de compra
        </Typography>

        <Container
          sx={{
            display: "flex",
            gap: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "15px",
            }}
          >
            <BuyingComicDetail comic={comic} />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "15px",
            }}
          >
            <FormProvider {...methods}>
              <Forms />
            </FormProvider>
          </Box>
        </Container>
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
