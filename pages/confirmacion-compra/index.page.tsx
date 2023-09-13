import { Container } from "@mui/material";
import PurchaseConfirmation from "dh-marvel/components/PurchaseConfirmation/PurchaseConfirmation";
import { useRouter } from "next/router";
import React from "react";

const ConfirmationPage = () => {
  //(ConfirmationPage as any).Layout = LayoutCheckout;
  const router = useRouter();

  const handleClickGoHome = () => {
    router.push("/");
  };

  const { comicName, comicPrice, comicImage, address } = router.query;

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
      <PurchaseConfirmation
        comicName={(comicName as string) || ""}
        comicImage={(comicImage as string) || ""}
        address={(address as string) || ""}
        price={(comicPrice as string) || ""}
        onGoBackClick={handleClickGoHome}
      />
    </Container>
  );
};

export default ConfirmationPage;
