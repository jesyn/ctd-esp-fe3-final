import { Container } from "@mui/material";
import PurchaseConfirmation from "dh-marvel/components/PurchaseConfirmation/PurchaseConfirmation";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import { useRouter } from "next/router";
import React from "react";
import Cookies from "js-cookie";

const ConfirmationPage = () => {
  const router = useRouter();

  const handleClickGoHome = () => {
    Cookies.remove("access", { path: "/confirmacion-compra" });
    router.push("/");
  };

  const { comicName, comicPrice, comicImage, address } = router.query;

  return (
    <LayoutCheckout>
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
    </LayoutCheckout>
  );
};

export default ConfirmationPage;
