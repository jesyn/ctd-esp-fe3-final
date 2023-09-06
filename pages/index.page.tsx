import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import ComicGrid from "dh-marvel/components/Home/ComicGrid";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import { toFront } from "mappers/comic.mapper";

interface Props {
  comics: any;
}

const Index: NextPage<Props> = ({ comics }) => {
  //console.log(comics);
  return (
    <>
      <Head>
        <title>Comics online</title>
        <meta
          name="description"
          content="Explora nuestra tienda de cómics en línea y descubre una amplia gama de cómics nuevos y clásicos. Encuentra tus héroes favoritos, historias emocionantes y ediciones limitadas. ¡Compra cómics en línea con facilidad y disfruta de la aventura en cada página!"
        />
        <meta
          name="keywords"
          content="cómics, tienda de cómics, cómics en línea, cómics nuevos, cómics clásicos, héroes de cómics, ediciones limitadas, aventuras en cómics, comprar cómics"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <BodySingle title={"Comics"}>
        <ComicGrid comics={comics} />
      </BodySingle>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const comicsApi = await getComics(0, 12);

  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate");
  console.log(comicsApi.data);
  const comics = toFront(comicsApi);
  console.log(comics);
  return {
    props: {
      comics,
    },
  };
};

export default Index;
