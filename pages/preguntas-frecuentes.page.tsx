import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { FaqsType } from "../components/faqs/faqsData";
import { GetStaticProps, NextPage } from "next";
import FaqSection from "dh-marvel/components/faqs/FaqSection";

interface Props {
  faqs: FaqsType[];
}

const faqsPage: NextPage<Props> = ({ faqs }) => {
  return (
    <BodySingle title={"Preguntas Frecuentes"}>
      <FaqSection faqs={faqs} />
    </BodySingle>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const url = "http://comics-online.vercel.app";
  const response = await fetch(`${url}/api/faqs`);
  const faqs = await response.json();

  return {
    props: {
      faqs,
    },
  };
};

export default faqsPage;
