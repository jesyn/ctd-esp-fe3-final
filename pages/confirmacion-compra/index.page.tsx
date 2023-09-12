import { Container } from "@mui/material";
import PurchaseConfirmation from "dh-marvel/components/PurchaseConfirmation/PurchaseConfirmation";
import { useRouter } from "next/router";
import React from "react";

const ConfirmationPage = () => {
  const router = useRouter();

  const handleClickGoHome = () => {
    router.push("/");
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
      <PurchaseConfirmation
        comicName={""}
        comicImage={""}
        address={""}
        price={0}
        onGoBackClick={handleClickGoHome}
      />
    </Container>
  );
};

export default ConfirmationPage;
